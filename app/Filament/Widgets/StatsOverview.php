<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\User;
use App\Models\ChurchAnnouncement;
use App\Models\ChurchBlog;
use App\Models\ChurchBulletin;
use App\Models\ChurchLivestream;
use Carbon\Carbon;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Warta', ChurchBulletin::count())
                ->description('Jumlah Warta Yang Diupload')
                ->icon('heroicon-o-book-open')
                ->color('success'),

            Stat::make('Total News', ChurchAnnouncement::count())
                ->description('Jumlah Berita Gereja Yang Diupload')
                ->icon('heroicon-o-newspaper')
                ->color('info'),

            Stat::make('Total Events', ChurchBlog::count())
                ->description('Jumlah Acara Gereja Yang Diupload')
                ->icon('heroicon-o-calendar-days')
                ->color('info'),

            Stat::make('New LiveStreaming', ChurchLivestream::count())
                ->description('Jumlah LiveStreaming Setiap Minggu')
                ->icon('heroicon-o-calendar')
                ->color('warning'),
        ];
    }

    protected function getChartData($model)
    {
        $data = [];
        for ($i = 5; $i >= 0; $i--) {
            $date = Carbon::now()->subMonths($i);
            $data[] = $model::whereYear('start_time', $date->year)
                ->whereMonth('date', $date->month)
                ->count();
        }
        return $data;
    }
}
