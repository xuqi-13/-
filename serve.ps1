$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:3000/')
$listener.Start()
Write-Host 'SERVER_STARTED on port 3000'

$rootPath = (Get-Item -Path "C:\Users\许\CodeBuddy\20260609142535\jd-mall").FullName
Write-Host "Root path: $rootPath"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    $localPath = $request.Url.LocalPath
    
    if ($localPath -eq '/') { 
        $localPath = '/index.html' 
    }
    
    $relativePath = $localPath.TrimStart('/')
    $filePath = Join-Path $rootPath $relativePath
    
    if (Test-Path $filePath -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($filePath)
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
        $mime = $mimeTypes[$ext]
        if (-not $mime) { $mime = 'application/octet-stream' }
        $response.ContentType = $mime
        $buffer = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $buffer.Length
        $response.OutputStream.Write($buffer, 0, $buffer.Length)
    } else {
        $response.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
        $response.ContentType = 'text/plain; charset=utf-8'
        $response.ContentLength64 = $msg.Length
        $response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $response.Close()
}