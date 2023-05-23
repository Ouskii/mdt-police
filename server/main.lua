MdtData = {
    CounterStorage = {},
    Tariff = {},
    Account = {}
}

local FetchMdtInformation in require 'server.functions'

MySQL.ready(FetchMdtInformation);