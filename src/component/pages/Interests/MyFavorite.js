// movies
import chienLang from '~/assets/images/PorterMovie/chienLang.jpg';
import ironMan from '~/assets/images/PorterMovie/ironman.png';
import fastFurious from '~/assets/images/PorterMovie/fastFurious.png';
// books
import tonyCoffee from '~/assets/images/Books/coffeeTony.png';
import Sherlock from '~/assets/images/Books/Sherlock.png';

const movieList = [
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
];

const bookList = [
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
];

export { movieList, bookList };
