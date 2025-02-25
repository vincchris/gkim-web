<?php

namespace App\Filament\Resources\ChurchBlogResource\Pages;

use App\Filament\Resources\ChurchBlogResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditChurchBlog extends EditRecord
{
    protected static string $resource = ChurchBlogResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
