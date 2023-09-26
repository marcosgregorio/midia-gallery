<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use ImageService;

class ImageController extends Controller
{
    private ImageService $service;

    public function __construct()
    {
        $this->service = new ImageService();
    }
    public function getImages()
    {
        dd("OOOOOOOOOi");
        $response = $this->service->getImages();
        return $response;
    }
}
