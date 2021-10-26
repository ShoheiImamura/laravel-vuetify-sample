@extends('layouts.app')

@section('title')
ダッシュボード
@endsection


@section('content')
<dashboard-component csrf-token="{{ csrf_token() }}"></dashboard-component>
@endsection