@echo off
echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo.
    echo Error: npm install failed.
    echo Please ensure Node.js is installed and 'npm' is in your PATH.
    pause
    exit /b %errorlevel%
)
echo.
echo Dependencies installed successfully.
pause
