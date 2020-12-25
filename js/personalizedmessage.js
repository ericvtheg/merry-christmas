const urlParams = new URLSearchParams(window.location.search);
const to = urlParams.get('to', '').toLowerCase();

names = {
    'theboys': ' boyssss',
    'mormor': ' Mormor',
    'mama': ' Mama',
    'papa': ' Papa & Joy',
    'ana': ' Ana',
    'hannah': ' Hannah',
    'karen': ' Karen',
    'annie': ' Annie'
};
message = {
    'theboys': "Hope ya'll have a great day and an even better new years. More life to my cucks",
    'mama': "As always, thank you for everything you do for me. You really are the best mom in the world and I do think about it often. You made me the person I am today. Hope you have an amazing day and rest of the year because you deserve it. Looking forward to when we get to hang out normally again!",
    'papa': "Dawg you're the best dad in the whole wide world. You told me since I was young that I would realize even more so as I got older, and you were right. I appreciate everything you did for me to make me the man I am today. I hope you and Joy have a great day and new years and continue to stay safe. Love you.",
    'mormor': "You are the best mormor in the world. I appreciate you so much. Soon enough we will get to see each other again! I am looking forward to it very much. I hope you are doing good and staying safe. I miss and love you so much.",
    'ana': "Have a good one bish",
    'hannah': "Have a fucking good ass day bruh. Hope you and the fam are doing great and staying safe. I STAN THE NASSERIS",
    'karen': "Thank you for becoming a second mom to me. I really can't express enough how grateful I am to be here and how much I appreciate all the extra you do for me and the boys. You're the best.",
    'annie': "Hope you are doing great and staying safe! I miss you, Mormor, and Sweden. Hope to have the opportunity to visit again soon so we can catch up. Hope you have a great new years & 2021!!"
};

to_name = names[to];
to_message = message[to];

$(document).ready(function() {
    $('#toReplaceTitle').text(to_name);
    $('#toReplaceMessage > h2').text(to_message);
});