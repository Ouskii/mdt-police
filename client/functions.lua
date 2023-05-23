local isTabletMinimalized = false

function OpenMdt()
    if Core.PlayerData.job.name ~= "police" then 
        return 
    end
    SetNuiFocus(true, true)

    if isTabletMinimalized then
        SendNUIMessage {
            action = 'UNMINIMALIZE_MDT',
        }
    else 

        



    end


end