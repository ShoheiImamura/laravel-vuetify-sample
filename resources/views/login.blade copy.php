<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <title>ログインページ</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>

<body>
    <div id="app">
        <v-app>
            <v-main>
                <v-container fluid>
                    <!-- 表示する vue component -->
                    <login-component csrf-token="{{ csrf_token() }}"></login-component>
                </v-container>
            </v-main>
            <v-footer app>
                <!-- -->
            </v-footer>
        </v-app>
    </div>
</body>

</html>