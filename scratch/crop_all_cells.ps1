Add-Type -AssemblyName System.Drawing
$srcPath = "C:/Users/LENOVO/.gemini/antigravity/brain/d62fe24a-22bc-4c1d-9ce0-5dd24c2702ff/.user_uploaded/media_1794057102960_a77b9aa9.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$w = [int]($bmp.Width / 3)
$h = [int]($bmp.Height / 3)

for ($r = 0; $r -lt 3; $r++) {
    for ($c = 0; $c -lt 3; $c++) {
        $idx = $r * 3 + $c + 1
        $rect = New-Object System.Drawing.Rectangle(($c * $w), ($r * $h), $w, $h)
        $cellBmp = $bmp.Clone($rect, $bmp.PixelFormat)
        $outPath = "scratch/cell_$($idx).jpg"
        $cellBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $cellBmp.Dispose()
        Write-Output "Saved cell $idx : Row $r, Col $c"
    }
}
$bmp.Dispose()
