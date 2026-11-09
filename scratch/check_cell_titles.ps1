Add-Type -AssemblyName System.Drawing

# Let's inspect the text in cell 4, cell 5, cell 6
# Crop title area: X: 15 to 220, Y: 25 to 80
for ($i = 1; $i -le 9; $i++) {
    $bmp = [System.Drawing.Bitmap]::FromFile("scratch/cell_$($i).jpg")
    $rect = New-Object System.Drawing.Rectangle(10, 5, 240, 75)
    $titleBmp = $bmp.Clone($rect, $bmp.PixelFormat)
    $titleBmp.Save("scratch/cell_title_$($i).png", [System.Drawing.Imaging.ImageFormat]::Png)
    $titleBmp.Dispose()
    $bmp.Dispose()
}
Write-Output "Saved cell_title_1..9.png"
