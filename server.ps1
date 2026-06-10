$port = 3000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "Server started at http://localhost:$port/"
} catch {
    Write-Host "ERROR starting server: $_"
    exit 1
}

$rootPath = 'C:\Users\许\CodeBuddy\20260609142535\jd-mall'
$mimeTypes = @{
    '.html' = 'text/html; charset=utf-8'
    '.css' = 'text/css; charset=utf-8'
    '.js' = 'application/javascript; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.png' = 'image/png'
    '.jpg' = 'image/jpeg'
    '.svg' = 'image/svg+xml'
    '.ico' = 'image/x-icon'
}

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $localPath = $request.Url.LocalPath
    Write-Host "Request: $localPath"
    
    if ($localPath -eq '/') { $localPath = '/index.html' }

    $filePath = Join-Path $rootPath $localPath.TrimStart('/')

    if (Test-Path $filePath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($filePath)
        $mime = $mimeTypes[$ext]
        if (-not $mime) { $mime = 'application/octet-stream' }

        $response.ContentType = $mime
        $buffer = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
        Write-Host "  -> 200 ($mime)"
    } else {
        $response.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $filePath")
        $response.ContentType = 'text/plain; charset=utf-8'
        $response.ContentLength64 = $msg.Length
        $response.OutputStream.Write($msg, 0, $msg.Length)
        Write-Host "  -> 404 ($filePath not found)"
    }

    $response.Close()
}
