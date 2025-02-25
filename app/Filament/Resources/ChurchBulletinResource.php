<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ChurchBulletinResource\Pages;
use App\Models\ChurchBulletin;
use Filament\Forms;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Resources\Form;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;

class ChurchBulletinResource extends Resource
{
    protected static ?string $model = ChurchBulletin::class;

    protected static ?string $navigationIcon = 'heroicon-o-document';
    protected static ?string $navigationGroup = 'Warta';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255),

                FileUpload::make('file_url')
                    ->label('Bulletin File')
                    ->required()
                    ->disk('public')
                    ->directory('bulletins'),

                DatePicker::make('date')
                    ->label('Bulletin Date')
                    ->required(),

                Select::make('created_by')
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
                    ->sortable()
                    ->searchable(),

                TextColumn::make('creator.username')
                    ->label('Created By')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('date')
                    ->label('Bulletin Date')
                    ->sortable(),

                TextColumn::make('created_at')
                    ->label('Created At')
                    ->sortable(),
            ])
            ->filters([
                //
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListChurchBulletins::route('/'),
            'create' => Pages\CreateChurchBulletin::route('/create'),
            'edit' => Pages\EditChurchBulletin::route('/{record}/edit'),
        ];
    }
}
