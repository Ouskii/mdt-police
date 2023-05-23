fx_version 'cerulean'
game 'gta5'
lua54 'yes'
author 'Ouski#4869, szymczakovv#1937'


shared_scripts {
    '@77-core/init.lua',
    '@ox_lib/init.lua',
    'shared/config.lua',
}

client_script { 'client/main.lua' }

server_scripts { '@oxmysql/lib/MySQL.lua', 'server/main.lua' }

ui_page 'nui/index.html'

files {
    'client/functions.lua',
    'client/events.lua',
    'server/enums.lua',
    'server/callbacks.lua',
    'server/functions.lua',
    'server/commands.lua',
    'nui/index.html',
    'nui/css/*.css',
    'nui/js/main.js',
    'nui/js/utils.js',
    'nui/js/Controllers/*.js',
    'nui/js/Handlers/*.js',
    'nui/js/Views/htmlFactory.js',
    'nui/js/Views/Components/*.js',
    'nui/js/Views/Pages/*.js',
    'nui/images/*png',
    'nui/js/config.js',
}
