<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ChurchBlogResource\Pages;
use App\Models\ChurchBlog;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ChurchBlogResource extends Resource
{
    protected static ?string $model = ChurchBlog::class;

    protected static ?string $navigationIcon = 'heroicon-o-clipboard-document-list';

    protected static ?string $navigationGroup = 'Event';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),

                Forms\Components\Textarea::make('content')
                    ->label('Blog Content')
                    ->required(),

                Forms\Components\FileUpload::make('image_url')
                    ->label('Blog Image')
                    ->required()
                    ->disk('public')
                    ->directory('blog-images'),

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
                Tables\Columns\TextColumn::make('content')->limit(50),
                Tables\Columns\ImageColumn::make('image_url')->label('Image'),
                Tables\Columns\TextColumn::make('creator.username')->label('Created By')->sortable(),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListChurchBlogs::route('/'),
            'create' => Pages\CreateChurchBlog::route('/create'),
            'edit' => Pages\EditChurchBlog::route('/{record}/edit'),
        ];
    }
}
