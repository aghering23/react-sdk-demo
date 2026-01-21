@echo off
echo Clearing Vite cache...
rmdir /s /q node_modules\.vite 2>nul
rmdir /s /q dist 2>nul

echo.
echo Starting development server...
echo Make sure to hard refresh your browser (Ctrl+Shift+R)
echo.

npm run dev
