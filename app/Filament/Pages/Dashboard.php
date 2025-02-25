<?php

namespace App\Filament\Pages;

use Filament\Pages\Dashboard as BaseDashboard;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;
use App\Filament\Widgets\StatsOverview;

class Dashboard extends BaseDashboard
{
    protected function getHeaderWidgets(): array
    {
        return [
            StatsOverview::class, // Tambahkan statistik kustom
            AccountWidget::class, // Menampilkan informasi akun admin
            FilamentInfoWidget::class, // Informasi Filament
        ];
    }
}
