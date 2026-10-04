$port = 8000
$root = $PSScriptRoot
if (!$root) { $root = Get-Location }

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")
$listener.Start()

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "  MOMENTLY WEB SERVER DANG CHAY TAI: http://localhost:$port" -ForegroundColor Cyan
Write-Host "  Nhan Ctrl+C de dung server" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Green

Start-Process "http://localhost:$port/login.html"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $localPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($localPath)) { $localPath = 'index.html' }
        $fullPath = Join-Path $root $localPath

        if (Test-Path $fullPath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($fullPath)
            $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
            $contentType = 'application/octet-stream'
            switch ($ext) {
                '.html' { $contentType = 'text/html; charset=utf-8' }
                '.htm'  { $contentType = 'text/html; charset=utf-8' }
                '.css'  { $contentType = 'text/css; charset=utf-8' }
                '.js'   { $contentType = 'application/javascript; charset=utf-8' }
                '.json' { $contentType = 'application/json; charset=utf-8' }
                '.png'  { $contentType = 'image/png' }
                '.jpg'  { $contentType = 'image/jpeg' }
                '.jpeg' { $contentType = 'image/jpeg' }
                '.svg'  { $contentType = 'image/svg+xml' }
                '.ico'  { $contentType = 'image/x-icon' }
            }
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        $response.OutputStream.Close()
    } catch {
        # ignore context errors on exit
    }
}
