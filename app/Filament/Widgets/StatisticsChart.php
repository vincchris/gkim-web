<?php

namespace App\Filament\Widgets;

use Filament\Widgets\BarChartWidget;
use App\Models\ChurchBulletin;
use App\Models\ChurchAnnouncement;
use App\Models\ChurchBlog;
use App\Models\ChurchLivestream;

class StatisticsChart extends BarChartWidget
{
    protected static ?string $heading = 'Statistik Gereja';

    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'label' => 'Jumlah Data',
                    'data' => [
                        ChurchBulletin::count(),
                        ChurchAnnouncement::count(),
                        ChurchBlog::count(),
                        ChurchLivestream::count(),
                    ],
                    'backgroundColor' => ['#34D399', '#60A5FA', '#FBBF24', '#F87171'], // Warna kategori
                ],
            ],
            'labels' => ['Warta', 'News', 'Events', 'Live Streaming'], // Label X-Axis
        ];
    }
}
