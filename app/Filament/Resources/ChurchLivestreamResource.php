<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ChurchLivestreamResource\Pages;
use App\Models\ChurchLivestream;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Resources\Form;

class ChurchLivestreamResource extends Resource
{
    protected static ?string $model = ChurchLivestream::class;

    protected static ?string $navigationIcon = 'heroicon-o-video-camera';

    protected static ?string $navigationGroup = 'Live Streaming';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->label('Livestream Title'),

                Forms\Components\TextInput::make('yt_link')
                    ->label('YouTube Link')
                    ->url()
                    ->required(),

                Forms\Components\FileUpload::make('image_url')
                    ->label('Thumbnail Image')
                    ->required()
                    ->disk('public')
                    ->directory('livestream-thumbnails'),

                Forms\Components\DateTimePicker::make('start_time')
                    ->label('Start Time')
                    ->required(),

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
                TextColumn::make('title')
                    ->label('Livestream Title')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('yt_link')
                    ->label('YouTube Link')
                    ->url(fn ($record) => $record->yt_link) // Closure untuk URL
                    ->searchable(),

                ImageColumn::make('image_url')
                    ->label('Thumbnail Image'),

                TextColumn::make('start_time')
                    ->label('Start Time')
                    ->dateTime()
                    ->sortable(),

                TextColumn::make('creator.username')
                    ->label('Created By')
                    ->sortable(),

                TextColumn::make('created_at')
                    ->label('Created At')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\Filter::make('upcoming')
                    ->label('Upcoming Livestreams')
                    ->query(fn ($query) => $query->where('start_time', '>=', now())),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListChurchLivestreams::route('/'),
            'create' => Pages\CreateChurchLivestream::route('/create'),
            'edit' => Pages\EditChurchLivestream::route('/{record}/edit'),
        ];
    }
}
