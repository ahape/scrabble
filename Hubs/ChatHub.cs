using System;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using scrabble.Data;

namespace scrabble.Hubs
{
    public class ChatHub : Hub
    {
        // NOTE: Group name is game ID.

        public async Task AddToGroup(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);

            await Clients.Group(groupName)
                .SendAsync("GroupUpdate", $"{Context.ConnectionId} has joined the group {groupName}");

            Console.WriteLine($"{Context.ConnectionId} has joined the group {groupName}");
        }

        public async Task RemoveFromGroup(string groupName)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);

            await Clients.Group(groupName)
                .SendAsync("GroupUpdate", $"{Context.ConnectionId} has been removed from the group {groupName}");

            Console.WriteLine($"{Context.ConnectionId} has been removed from the group {groupName}");
        }
    }
}
