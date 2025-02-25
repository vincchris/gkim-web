<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChurchAnnouncementsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('church_announcements', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('content');
            $table->date('date'); // Tanggal pengumuman
            $table->string('image_url'); // Path untuk menyimpan gambar pengumuman
            $table->unsignedBigInteger('created_by'); // Relasi ke tabel admin
            $table->timestamps();

            // Foreign key constraint untuk relasi ke tabel admins
            $table->foreign('created_by')->references('id')->on('admins')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('announcements');
    }
}
