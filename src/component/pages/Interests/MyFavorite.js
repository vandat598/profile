import { faFilm, faBook, faPersonBiking, faMotorcycle, faFish } from '@fortawesome/free-solid-svg-icons';

// movies
import chienLang from '~/assets/images/Movies/chienLang.jpg';
import ironMan from '~/assets/images/Movies/ironman.png';
import fastFurious from '~/assets/images/Movies/fastFurious.png';
// books
import tonyCoffee from '~/assets/images/Books/coffeeTony.png';
import Sherlock from '~/assets/images/Books/Sherlock.png';
// other
import fixedGear from '~/assets/images/favorites/bicycle.png';
import benda300 from '~/assets/images/favorites/benda300.png';
import ranchu from '~/assets/images/favorites/ranchu.png';

const favorites = [
    {
        favType: 'Xem Phim',
        icon: faFilm,
        list: [
            {
                title: 'Fast & Furious',
                poster: fastFurious,
                desc: 'Fast And Furious 6 là phần thứ 6 của series phim hành động Mỹ nổi tiếng Fast And Furious. Lần này, đặc vụ Hobbs phải nhờ đến Dom và nhóm của anh giúp sức trong cuộc vây bắt 1 băng đảng do Owen Shaw cầm đầu. Đổi lại, Dom muốn một bản lý lịch "sạch sẽ" cho mọi người trong đội.',
            },
            {
                title: 'Iron Man',
                poster: ironMan,
                desc: 'Tony Stark vừa là chủ một tập đoàn công nghệ vừa là một tay chơi kỳ dị. Trong chuyến thăm Afghanistan, anh đã bị một nhóm khủng bố bắt cóc. Họ yêu cầu Tony chế tạo một loại vũ khí hủy diệt để tấn công nước Mỹ. Xem phim này bạn sẽ nhận ra một sự thật phũ phàng rằng những vũ khí do anh chế tạo đang quay lại tấn công anh, Tony bắt tay vào chế tạo những bộ giáp công nghệ cao. Thoát khỏi nơi giam cầm, Tony trở thành người đại diện cho công lý với biệt danh Iron Man.',
            },
            {
                title: 'Chiến Lang',
                poster: chienLang,
                desc: 'Vương Lãnh Phong, một người lính sẵn sàng xông pha trận mạc. Nhưng sau lần cãi lời chỉ huy và bắn chết một phần tử khủng bố, anh bị khai trừ khỏi quân đội. Kẻ bị đánh chết vốn là em trai của tên trùm ma túy Mẫn Đăng. Để trả thù, hắn kết hợp với tên lính đánh thuê Lão Miêu để sát hại Lãnh Phong và những người đồng đội của anh...',
            },
        ],
    },
    {
        favType: 'Đọc Sách',
        icon: faBook,
        list: [
            {
                title: 'Cà Phê cùng Tony',
                poster: tonyCoffee,
                desc: 'Cà phê cùng Tony là sự tập hợp các bài viết trên trạng mạng xã hội của tác giả Tony Buổi Sáng (TnBS) về những bài học, câu chuyện anh đã trải nghiệm trong cuộc sống. Đó có thể là cách anh chia sẻ với các bạn trẻ về những chuyện to tát như khởi nghiệp,đạo đức kinh doanh, học tập đến những việc nhỏ nhặt như ăn mặc, giao tiếp... sao cho văn minh, lịch sự.',
            },
            {
                title: 'Những cuộc phiêu lưu của Sherlock Holmes',
                poster: Sherlock,
                desc: 'Cà phê cùng Tony là sự tập hợp các bài viết trên trạng mạng xã hội của tác giả Tony Buổi Sáng (TnBS) về những bài học, câu chuyện anh đã trải nghiệm trong cuộc sống. Đó có thể là cách anh chia sẻ với các bạn trẻ về những chuyện to tát như khởi nghiệp,đạo đức kinh doanh, học tập đến những việc nhỏ nhặt như ăn mặc, giao tiếp... sao cho văn minh, lịch sự.',
            },
        ],
    },
    {
        favType: 'Thể Thao',
        icon: faPersonBiking,
        list: [
            {
                title: 'Fixed Gear',
                poster: fixedGear,
                desc: 'Xe đạp Fixed Gear hay còn gọi là xe đạp không phanh là dòng xe có cấu tạo đơn giản. Xe chuyển động động nhờ vào dây xích nối giữa líp và đùi đĩa và chỉ có thể chuyển động khi nào bàn đạp chuyển động.',
            },
        ],
    },
    {
        favType: 'Phân Khối Lớn',
        icon: faMotorcycle,
        list: [
            {
                title: 'Benda BD300cc',
                poster: benda300,
                desc: 'Benda BD300 mang phong cách đặc trưng của một chiếc cruiser với yên xe võng, và tay lái ngang, tạo tư thế lái xe thoải mái cho người sử dụng trong suốt hành trình dài. Bên cạnh đó, xe cũng mang đậm tính cổ điển với các thiết kế đèn pha, gương chiếu hậu và đồng hồ điều khiển hình tròn.',
            },
        ],
    },
    {
        favType: 'Nuôi Cá',
        icon: faFish,
        list: [
            {
                title: 'Cá vàng ranchu',
                poster: ranchu,
                desc: 'Cá Ranchu là một dòng cá vàng không có vây lưng, có thân hình trứng là dòng cá được lai tạo phát triển từ dòng cá Lan Thọ. Cá có khả năng bơi lội khoan thai, cử động nhẹ nhàng và duyên dáng cộng với thân hình đáng yêu nên cá Ranchu là loài cá vàng được ưa chuộng nhất ở Việt Nam cũng như trên thế giới.',
            },
        ],
    },
];

export { favorites };

// const movieList = [
//     {
//         title: 'Fast & Furious',
//         poster: fastFurious,
//         desc: 'Fast And Furious 6 là phần thứ 6 của series phim hành động Mỹ nổi tiếng Fast And Furious. Lần này, đặc vụ Hobbs phải nhờ đến Dom và nhóm của anh giúp sức trong cuộc vây bắt 1 băng đảng do Owen Shaw cầm đầu. Đổi lại, Dom muốn một bản lý lịch "sạch sẽ" cho mọi người trong đội.',
//     },
//     {
//         title: 'Iron Man',
//         poster: ironMan,
//         desc: 'Tony Stark vừa là chủ một tập đoàn công nghệ vừa là một tay chơi kỳ dị. Trong chuyến thăm Afghanistan, anh đã bị một nhóm khủng bố bắt cóc. Họ yêu cầu Tony chế tạo một loại vũ khí hủy diệt để tấn công nước Mỹ. Xem phim này bạn sẽ nhận ra một sự thật phũ phàng rằng những vũ khí do anh chế tạo đang quay lại tấn công anh, Tony bắt tay vào chế tạo những bộ giáp công nghệ cao. Thoát khỏi nơi giam cầm, Tony trở thành người đại diện cho công lý với biệt danh Iron Man.',
//     },
//     {
//         title: 'Chiến Lang',
//         poster: chienLang,
//         desc: 'Vương Lãnh Phong, một người lính sẵn sàng xông pha trận mạc. Nhưng sau lần cãi lời chỉ huy và bắn chết một phần tử khủng bố, anh bị khai trừ khỏi quân đội. Kẻ bị đánh chết vốn là em trai của tên trùm ma túy Mẫn Đăng. Để trả thù, hắn kết hợp với tên lính đánh thuê Lão Miêu để sát hại Lãnh Phong và những người đồng đội của anh...',
//     },
// ];

// const bookList = [
//     {
//         title: 'Cà Phê cùng Tony',
//         poster: tonyCoffee,
//         desc: 'Cà phê cùng Tony là sự tập hợp các bài viết trên trạng mạng xã hội của tác giả Tony Buổi Sáng (TnBS) về những bài học, câu chuyện anh đã trải nghiệm trong cuộc sống. Đó có thể là cách anh chia sẻ với các bạn trẻ về những chuyện to tát như khởi nghiệp,đạo đức kinh doanh, học tập đến những việc nhỏ nhặt như ăn mặc, giao tiếp... sao cho văn minh, lịch sự.',
//     },
//     {
//         title: 'Những cuộc phiêu lưu của Sherlock Holmes',
//         poster: Sherlock,
//         desc: 'Cà phê cùng Tony là sự tập hợp các bài viết trên trạng mạng xã hội của tác giả Tony Buổi Sáng (TnBS) về những bài học, câu chuyện anh đã trải nghiệm trong cuộc sống. Đó có thể là cách anh chia sẻ với các bạn trẻ về những chuyện to tát như khởi nghiệp,đạo đức kinh doanh, học tập đến những việc nhỏ nhặt như ăn mặc, giao tiếp... sao cho văn minh, lịch sự.',
//     },
// ];

// export { movieList, bookList };
