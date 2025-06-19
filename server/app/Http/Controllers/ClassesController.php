<?php

namespace App\Http\Controllers;

use App\Models\Classes;
use App\Models\Professor;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClassesController extends Controller
{
    /**
     * Retorna o ID do vídeo do YouTube a partir do link fornecido.
     * @param string $youtube_video_link
     * @return string | \Illuminate\Http\JsonResponse
     */
    private function getYouTubeVideoId($youtube_video_link) {
        $query = parse_url($youtube_video_link, PHP_URL_QUERY);
        parse_str($query, $params);

        if (!isset($params['v'])) {
            throw new HttpResponseException(response()->json([
                'message' => 'O vídeo do YouTube é inválido! Insira o link correto.'
            ], 400));
        }

        return $params['v'];
    }

    public function store(Request $request, Professor $professor) {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'youtube_video_link' => 'required|url',
        ]);

        $youtube_video_link = $request->input('youtube_video_link');
        $youtube_video_id = $this->getYouTubeVideoId($youtube_video_link);

        $fields = $request->only([
            'title',
            'description',
        ]);

        $class = Classes::create([
            'title' => $fields['title'],
            'description' => $fields['description'],
            'youtube_video_id' => $youtube_video_id,
            'professor_id' => $professor->id,
        ]);

        return response()->json([
            'message' => 'Aula criada com sucesso!',
            'class' => $class,
        ], 201);
    }

    public function update(Request $request, Professor $professor, Classes $classes) {
        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'youtube_video_link' => 'sometimes|required|url',
        ]);

        if ($request->has('youtube_video_link')) {
            $youtube_video_link = $request->input('youtube_video_link');
            $youtube_video_id = $this->getYouTubeVideoId($youtube_video_link);

            $classes->youtube_video_id = $youtube_video_id;
        }

        $classes->fill($request->only([
            'title',
            'description',
        ]));

        $classes->save();

        return response()->json([
            'message' => 'Aula atualizada com sucesso!',
            'class' => $classes,
        ]);
    }
}
