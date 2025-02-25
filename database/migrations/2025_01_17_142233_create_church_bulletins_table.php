<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChurchBulletinsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('church_bulletins', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('file_url');
            $table->date('date');
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
        Schema::dropIfExists('church_bulletins');
    }
}
