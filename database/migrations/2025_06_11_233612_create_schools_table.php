<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('schools', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('razao_social');
            $table->string('fantasia');
            $table->string('cnpj')->unique();
            $table->enum('status', ['Y', 'N'])->default('Y');
            $table->string('phone')->unique();
            $table->string('address');
            $table->string('number');
            $table->string('comp')->nullable();
            $table->string('neighbourhood');
            $table->string('zip');
            $table->string('city');
            $table->string('state');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schools');
    }
};
