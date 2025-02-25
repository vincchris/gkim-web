<?php

namespace App\Filament\Resources\ChurchLivestreamResource\Pages;

use App\Filament\Resources\ChurchLivestreamResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListChurchLivestreams extends ListRecords
{
    protected static string $resource = ChurchLivestreamResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
