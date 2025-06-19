<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste Embed</title>
</head>
<body>
    @if (!empty($classes))
        @foreach ($classes as $class)
            <h1 class="text-red-500">{{ $class->title }}</h1>

            <p>{{ $class->description }}</p>

            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/{{ $class->youtube_video_id }}"
                    title="{{ $class->title }}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
            </iframe>
        @endforeach
    @else
        <p>Nenhum vídeo disponível para exibição.</p>
    @endif

    <p>Este vídeo foi carregado dinamicamente a partir do ID salvo no banco.</p>
</body>
</html>
