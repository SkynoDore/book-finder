<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::table('searches', function (Blueprint $table) {
        $table->unsignedInteger('search_count')->default(1);
    });
}

public function down()
{
    Schema::table('searches', function (Blueprint $table) {
        $table->dropColumn('search_count');
    });
}

};
