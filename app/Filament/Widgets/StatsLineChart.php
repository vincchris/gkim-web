<?php

namespace App\Filament\Widgets;

use Filament\Widgets\LineChartWidget;
use App\Models\ChurchBulletin;
use App\Models\ChurchAnnouncement;
use App\Models\ChurchBlog;
use App\Models\ChurchLivestream;

class StatsLineChart extends LineChartWidget
{
    protected static ?string $heading = 'Statistik Gereja';

    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'label' => 'Warta Gereja',
                    'data' => ChurchBulletin::selectRaw('COUNT(*) as count')
                        ->groupByRaw('MONTH(date)')
                        ->pluck('count')
                        ->toArray(),
                    'borderColor' => 'rgb(75, 192, 192)',
                    'backgroundColor' => 'rgba(75, 192, 192, 0.2)',
                ],
                [
                    'label' => 'Berita Gereja',
                    'data' => ChurchAnnouncement::selectRaw('COUNT(*) as count')
                        ->groupByRaw('MONTH(date)')
                        ->pluck('count')
                        ->toArray(),
                    'borderColor' => 'rgb(255, 99, 132)',
                    'backgroundColor' => 'rgba(255, 99, 132, 0.2)',
                ],
                [
                    'label' => 'Acara Gereja',
                    'data' => ChurchBlog::selectRaw('COUNT(*) as count')
                        ->groupByRaw('MONTH(created_by)')
                        ->pluck('count')
                        ->toArray(),
                    'borderColor' => 'rgb(54, 162, 235)',
                    'backgroundColor' => 'rgba(54, 162, 235, 0.2)',
                ],
                [
                    'label' => 'Live Streaming',
                    'data' => ChurchLivestream::selectRaw('COUNT(*) as count')
                        ->groupByRaw('MONTH(start_time)')
                        ->pluck('count')
                        ->toArray(),
                    'borderColor' => 'rgb(255, 205, 86)',
                    'backgroundColor' => 'rgba(255, 205, 86, 0.2)',
                ],
            ],
            'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
        ];
    }
}
