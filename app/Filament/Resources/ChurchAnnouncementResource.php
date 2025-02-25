<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ChurchAnnouncementResource\Pages;
use App\Models\ChurchAnnouncement;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ChurchAnnouncementResource extends Resource
{
    protected static ?string $model = ChurchAnnouncement::class;

    protected static ?string $navigationIcon = 'heroicon-o-bell';

    protected static ?string $navigationGroup = 'Event';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),

                Forms\Components\Textarea::make('content')
                    ->required(),

                Forms\Components\DatePicker::make('date')
                    ->label('Announcement Date')
                    ->required(),

                Forms\Components\FileUpload::make('image_url')
                    ->label('Announcement Image')
                    ->required()
                    ->disk('public')
                    ->directory('announcement-images'),

                Forms\Components\Select::make('created_by')
                    ->relationship('creator', 'username')
                    ->label('Created By')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')->searchable()->sortable(),
                Tables\Columns\TextColumn::make('date')->date()->sortable(),
                Tables\Columns\TextColumn::make('creator.username')->label('Created By')->sortable(),
                Tables\Columns\ImageColumn::make('image_url')->label('Image'),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListChurchAnnouncements::route('/'),
            'create' => Pages\CreateChurchAnnouncement::route('/create'),
            'edit' => Pages\EditChurchAnnouncement::route('/{record}/edit'),
        ];
    }
}
