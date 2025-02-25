<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChurchLivestreamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('church_livestreams', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('yt_link');
            $table->string('image_url')->nullable();
            $table->timestamp('start_time');
            $table->timestamps();
            $table->foreignId('created_by')->constrained('admins')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('church_livestreams');
    }
}
