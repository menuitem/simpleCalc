use Rack::Static, :urls => ["/css", "/img", "/js","/test"], :root => "."
run lambda { |env| [200, { 'Cache-Control' => 'public, max-age=86400' }, File.open('index.html', File::RDONLY)] }
