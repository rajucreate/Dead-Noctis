Add-Type -AssemblyName System.Drawing

$srcPath = "C:/Users/LENOVO/.gemini/antigravity/brain/d62fe24a-22bc-4c1d-9ce0-5dd24c2702ff/.user_uploaded/media_1794057102960_a77b9aa9.jpg"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output "Full image size: $($img.Width) x $($img.Height)"

# The storyboard is a 3x3 grid:
# Row 0: 01. HOME, 02. ABOUT, 03. EVENTS / DETAILS
# Row 1: 04. RULES, 05. FAQ, 06. REGISTER
# Row 2: 07. LOADING, 08. 404, 09. MOBILE VIEW

# Let's inspect the layout of Row 0, Cell 2 (03. EVENTS / DETAILS):
# In a 3x3 grid, cell width is ~ Width / 3, cell height is ~ Height / 3.
$cellW = [int]($img.Width / 3)
$cellH = [int]($img.Height / 3)
Write-Output "Cell 03 estimated: X = $($cellW * 2), Y = 0, W = $cellW, H = $cellH"

$img.Dispose()
