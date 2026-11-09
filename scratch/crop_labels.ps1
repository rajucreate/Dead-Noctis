Add-Type -AssemblyName System.Drawing

for ($idx = 1; $idx -le 9; $idx++) {
    $bmp = [System.Drawing.Bitmap]::FromFile("scratch/cell_$($idx).jpg")
    # Crop the top-left area where title/label is: X=5..160, Y=2..45
    $labelRect = New-Object System.Drawing.Rectangle(5, 2, 160, 43)
    $labelBmp = $bmp.Clone($labelRect, $bmp.PixelFormat)
    $labelBmp.Save("scratch/label_$($idx).png", [System.Drawing.Imaging.ImageFormat]::Png)
    $labelBmp.Dispose()
    $bmp.Dispose()
}
Write-Output "Saved all label crops"
