local isTabletMinimalized = false

local OpenMdt = function()
    
    -- if Core.PlayerData.job.name ~= "police" then
    --     return
    -- end

    SetNuiFocus(true, true)

    if isTabletMinimalized then
        SendNUIMessage {
            action = 'UNMINIMALIZE_MDT',
        }
    else
        -- local playerAccount, accounts = lib.callback.await('77-mdtpolice/server/getPlayerAccounts', false, Core.PlayerData.citizenId)
        -- lib.callback('77-mdtpolice/sever/openMdt', false, function(result, citzenCounter, tariff)
            SendNUIMessage {
                action = 'OPEN_MDT',
                actionData = {
                    {
                        citizenId = tonumber(Core.PlayerData.citizenId),
                        charInfo = {
                            firstname = Core.PlayerData.charInfo.firstname,
                            lastname = Core.PlayerData.charInfo.lastname,
                        },
                        job = Core.PlayerData.job
                    },
                    -- citzenCounter,
                    -- result,
                    -- tariff,
                    -- playerAccount,
                    -- accounts
                }
            }
        -- end)
    end
end


RegisterCommand('pd', OpenMdt)
