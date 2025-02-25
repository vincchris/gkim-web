<?php

namespace App\Filament\Resources\ChurchAnnouncementResource\Pages;

use App\Filament\Resources\ChurchAnnouncementResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListChurchAnnouncements extends ListRecords
{
    protected static string $resource = ChurchAnnouncementResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
