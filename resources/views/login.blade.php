@extends('layouts.app')

@section('title')
ログイン
@endsection

@section('content')
<login-component csrf-token="{{ csrf_token() }}"></login-component>
@endsection