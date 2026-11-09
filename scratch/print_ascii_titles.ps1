Add-Type -AssemblyName System.Drawing

for ($i = 4; $i -le 6; $i++) {
    $bmp = [System.Drawing.Bitmap]::FromFile("scratch/thresh_title_$($i).png")
    Write-Output "================ TITLE $i ================"
    for ($y = 0; $y -lt $bmp.Height; $y += 3) {
        $row = ""
        for ($x = 0; $x -lt 160; $x += 2) {
            $c = $bmp.GetPixel($x, $y)
            if ($c.R -gt 128) { $row += "#" }
            else { $row += " " }
        }
        if ($row.Trim().Length -gt 0) {
            Write-Output $row
        }
    }
    $bmp.Dispose()
}
