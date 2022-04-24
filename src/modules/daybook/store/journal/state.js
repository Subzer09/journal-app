export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            // language=HTML
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deserunt distinctio dolorem, harum impedit in laboriosam molestias recusandae reprehenderit voluptatem. Aliquid atque dolore eligendi harum incidunt maiores quidem saepe similique?',
            picture: 'https://via.placeholder.com/1280x620'
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            // language=HTML
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, explicabo, non. Beatae commodi perferendis quis reprehenderit sapiente temporibus? Assumenda eligendi harum magni quis quisquam tenetur voluptas. Amet illum laboriosam omnis?',
            picture: 'https://via.placeholder.com/1280x620'
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            // language=HTML
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid consectetur culpa cupiditate dignissimos doloribus dolorum, eaque illum in laborum molestiae nulla perspiciatis, quaerat quam reiciendis rem repellat, ullam? In.',
            picture: 'https://via.placeholder.com/1280x620'
        },
    ]
})