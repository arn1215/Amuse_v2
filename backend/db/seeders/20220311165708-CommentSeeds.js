'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      */
    return queryInterface.bulkInsert('Comments', [
      { userId: 2, userName: "strawberry", songId: 5, body: "this song slappin", createdAt: new Date(), updatedAt: new Date() },
      // { userId: 2, songId: 6, body: "this song stay slappin", createdAt: new Date(), updatedAt: new Date() },
      // { userId: 2, songId: 7, body: "this song stil be stay slappin", createdAt: new Date(), updatedAt: new Date() },
      // {
      //   userId: 8,
      //   songId: 11,
      //   body: 'Ut doloribus sunt quisquam sunt. Explicabo magnam nulla facere veniam sint voluptate. Architecto autem aspernatur voluptates aut. Omnis quidem culpa sint iusto.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 12,
      //   songId: 15,
      //   body: 'Vel cumque necessitatibus explicabo suscipit. Sequi mollitia repellendus alias. Fugit suscipit dolorum praesentium porro excepturi at assumenda. Consectetur aut qui unde sapiente. Eos consequatur sunt sed laborum qui maxime. Vero iure exercitationem laborum aut accusamus aut.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 11,
      //   songId: 8,
      //   body: 'Repellat molestias perferendis iure id modi. Omnis voluptates pariatur corrupti quos. Tenetur aspernatur consequatur recusandae harum sed sint. Aliquam quaerat optio tenetur et. Impedit sunt dignissimos est quibusdam qui et dolor mollitia.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 4,
      //   songId: 12,
      //   body: 'Quam ut ullam nihil sed id voluptas. Sunt ad rerum sint. Nihil nisi blanditiis deleniti id in delectus. Qui nostrum quae aspernatur voluptas eum voluptates fugiat necessitatibus in. Voluptatem rerum officia dolorem odit voluptatem aspernatur. Animi eius neque libero error impedit cum.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 6,
      //   songId: 10,
      //   body: 'Sint fuga eum ea et error velit omnis. Ut quo voluptatum quia voluptas voluptas. Voluptatibus sit corporis aut a corporis impedit molestiae aut. Et necessitatibus velit reprehenderit repellat velit laboriosam impedit. Sit iste praesentium necessitatibus repellat doloribus reiciendis. Similique occaecati ea mollitia quia et.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 1,
      //   songId: 15,
      //   body: 'Sapiente ullam harum fugit quia at. Officia asperiores blanditiis modi voluptatem quod. Temporibus quam quia. Qui esse soluta.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 5,
      //   songId: 10,
      //   body: 'Omnis velit et aliquid ut. Dolorum distinctio qui ducimus facere. Consequatur tempora eum nihil eum inventore dicta et dolores. Fugit nemo ad qui fugiat tenetur aut ipsam. A itaque facilis. Veniam voluptatum repellat.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 1,
      //   songId: 5,
      //   body: 'Facere dicta quia ab placeat ex nihil quis quisquam. Tempore illum quaerat error ut porro fugit architecto voluptatem delectus. Debitis blanditiis culpa non beatae cum. Voluptatem eos nihil at doloribus error aut.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 13,
      //   songId: 15,
      //   body: 'Ut tempora qui aliquid quisquam inventore ex. Aspernatur fugiat facere minus. Nisi exercitationem repellat quasi esse totam numquam omnis voluptatem. Molestias incidunt magnam voluptates animi aut animi.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 5,
      //   songId: 15,
      //   body: 'Iure corrupti impedit. Delectus eos maxime et et quia enim. Voluptatem ut blanditiis voluptatem dignissimos. Officiis quas tempore eius illo. Aliquam consequatur eos officia corporis quis molestiae excepturi.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 1,
      //   songId: 13,
      //   body: 'Sunt rerum ratione doloremque nobis est sint ratione. Eligendi reiciendis veritatis aut dolorem maiores adipisci non. Eligendi earum praesentium id minus eos accusantium alias labore. Eum et distinctio tempora temporibus est est. Autem placeat voluptate architecto. Sunt aperiam ut.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 20,
      //   songId: 8,
      //   body: 'Quo natus aliquam sapiente corrupti qui praesentium. Sint et ea. In ut maiores aut voluptate molestias itaque ipsum dolores. Ut iure veniam sit vel praesentium laboriosam. Sunt alias voluptatem a at eveniet vero nisi earum. Vel nisi sunt.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 19,
      //   songId: 3,
      //   body: 'Error iste quam quis. Perspiciatis sint maxime ut atque. Ullam architecto quos error. Ut voluptates nostrum voluptate quas. Qui vel sequi enim unde consequatur architecto quasi facilis. Officia eveniet voluptatum blanditiis exercitationem.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 18,
      //   songId: 6,
      //   body: 'Debitis voluptatibus fugit sit omnis nesciunt sunt quia similique. Sunt ratione debitis aperiam dolorum voluptas sed est. Aut dolorem veritatis odit facere odio atque. Ratione repellat quibusdam iusto modi sit dolor odit.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 5,
      //   songId: 2,
      //   body: 'Illum enim eaque perspiciatis. Illo possimus rerum. Distinctio eum culpa maxime enim fugiat aliquid ut quam voluptatem. Aliquid odio magni. Et maiores ex.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 10,
      //   songId: 13,
      //   body: 'Autem unde dignissimos ut. Consequuntur ipsa enim perferendis dolorem ut sapiente. Repudiandae alias dolore sint nemo qui vitae est. Consequatur sint labore officia.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 11,
      //   songId: 13,
      //   body: 'Necessitatibus itaque omnis in nihil numquam consectetur. Id voluptatem et officiis quia beatae saepe placeat animi. Sint non porro delectus minus laborum ea. Molestiae ut et porro corporis nam rem.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 3,
      //   songId: 4,
      //   body: 'Vitae asperiores consequatur aspernatur dolor est. Voluptate culpa et asperiores qui. Sequi commodi minima quos voluptate iure doloribus sit sint. Blanditiis eligendi temporibus tenetur repudiandae.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 22,
      //   songId: 15,
      //   body: 'Assumenda nemo dolor eos voluptas quasi nobis et voluptatum aut. Voluptas ea quis tempora itaque. Voluptatem sit voluptatem sed unde quaerat voluptas iure recusandae saepe. Praesentium hic voluptas nam possimus quo laborum aut commodi aut. Omnis sed ut illum nihil consequuntur. Vero consequatur libero doloribus exercitationem esse magnam velit.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 2,
      //   songId: 3,
      //   body: 'Est omnis quis aut totam praesentium autem amet. Rerum laboriosam nemo consequuntur ad illum et sint animi voluptatem. Totam inventore necessitatibus culpa dolorem voluptatem. Nihil tempora dolore.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 16,
      //   songId: 8,
      //   body: 'Sequi quasi incidunt. Laboriosam odio odit aut expedita dolor sit ut possimus. Veritatis unde nostrum magnam. Sit quia soluta reiciendis.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 21,
      //   songId: 13,
      //   body: 'Nobis aperiam corrupti deleniti possimus eos tenetur a consequatur corrupti. Rerum doloremque eum molestiae explicabo ea sunt consequatur non illum. Dicta at ratione fugiat soluta possimus ut fugit.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 21,
      //   songId: 2,
      //   body: 'Dolor tempora sed magni fugiat at. Rerum deserunt debitis. Repellendus fugit possimus expedita non quod tenetur itaque saepe corporis. Autem sapiente ab quis delectus aut quaerat numquam. Possimus enim fugiat sint ut maiores vero vero qui.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 7,
      //   songId: 12,
      //   body: 'Sit voluptas recusandae aliquid nemo sequi earum quos sed. Quia ad minus aut dolor. Architecto impedit ea harum dignissimos est sed adipisci aut veritatis.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 23,
      //   songId: 6,
      //   body: 'Eveniet nihil asperiores. Incidunt reprehenderit eveniet. Laborum hic dolores ea dolor.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 12,
      //   songId: 15,
      //   body: 'Illum est laudantium. Eum atque et quaerat eveniet perspiciatis dignissimos neque rerum. Tempora atque rerum ut nesciunt modi. Sed fugit voluptas quam et. Hic eos voluptatum voluptas occaecati magnam totam eos. Sapiente illum officiis qui ipsam maiores sit iure.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 20,
      //   songId: 8,
      //   body: 'Corrupti optio incidunt dolorem qui. Nobis provident possimus iure ex qui accusamus. Eos ipsa rerum ut.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 23,
      //   songId: 5,
      //   body: 'Culpa aut fuga dolor incidunt optio in harum quidem. Est assumenda eius qui numquam. Soluta dolor minima ad voluptatum consequuntur omnis distinctio rem nihil.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 11,
      //   songId: 9,
      //   body: 'Et voluptatem in aliquam. Officiis est qui consequatur consequuntur. Aut similique distinctio ea alias accusantium facilis ea eum esse. Perferendis blanditiis incidunt magni. In labore qui fugiat. Cupiditate inventore aut ratione inventore.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 1,
      //   songId: 2,
      //   body: 'Et ea est sed. Iusto expedita consequuntur laboriosam illum ut accusamus corrupti accusamus. Minima et exercitationem et eos. Nam nam vel quia ipsam iste tempora cumque eveniet. Illo quis minima eum ad eum ducimus fugiat est sed. Quisquam minima laudantium pariatur hic a.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 13,
      //   songId: 2,
      //   body: 'Adipisci modi porro et fuga. Voluptate qui aut qui sunt dolores aut. Dolore nemo nam. Quis molestiae eveniet. Ullam nam ea id. Eum nisi consectetur saepe aperiam est in et commodi.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 23,
      //   songId: 3,
      //   body: 'Facilis eos sit voluptate tempora quasi facere culpa. Aut sunt enim voluptas. Aut aut inventore sit cumque laborum et natus alias dolore. Neque libero enim dolore est doloribus dolores enim. Tempora officia debitis asperiores ab reiciendis porro beatae ex. Qui aliquid necessitatibus.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 3,
      //   songId: 13,
      //   body: 'Nisi debitis ut autem nesciunt quas delectus. Porro ut sit sed eos. Deleniti dolores esse dolorem.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 7,
      //   songId: 1,
      //   body: 'Incidunt totam voluptatum placeat vel sit labore quia ullam. Ullam est natus incidunt ut dicta quisquam quaerat temporibus. Dicta assumenda et et esse aliquid ducimus. Molestias dolores sunt libero sit rerum esse quia.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 16,
      //   songId: 5,
      //   body: 'Illo id omnis. Voluptatem dolor omnis totam. Quo corrupti distinctio asperiores odit molestiae rerum molestiae. Et sit dolor ipsum sit sint. Corrupti dolore et doloremque dolores dolorem soluta impedit possimus tempora.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 5,
      //   songId: 5,
      //   body: 'Et quisquam perspiciatis soluta nulla ut iusto quas. Aut quas et. Est in et dolor consequatur nemo. Incidunt est recusandae a facilis voluptatum sint quibusdam perspiciatis.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 18,
      //   songId: 9,
      //   body: 'Quia inventore ab fugiat vel at. Rem illum explicabo soluta repudiandae omnis velit ea perferendis consequatur. Modi alias repellat suscipit. Numquam totam dolor cumque non consequatur. Enim rerum blanditiis eius quidem et dolores.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 6,
      //   songId: 4,
      //   body: 'Occaecati quis beatae commodi quibusdam tenetur natus esse velit. Sint aspernatur repellat sit qui enim rem nostrum quia. Et sunt eos sunt itaque veritatis quibusdam velit aut. Quasi dolor quibusdam nemo sed ut quia numquam ipsam voluptas.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 17,
      //   songId: 1,
      //   body: 'Mollitia et qui minus et consequatur nostrum maiores necessitatibus. Autem eveniet perspiciatis ipsa commodi. Ipsa nostrum unde nam. Rerum exercitationem repellat quis recusandae ipsa esse voluptas quaerat. Alias accusantium accusamus tenetur esse dolor accusamus sed. Magni iste sint iste accusantium et.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 12,
      //   songId: 2,
      //   body: 'Modi quidem iusto ad. Voluptatem nobis dolorum. A aspernatur eum ad esse nostrum rerum recusandae quos quae. Labore architecto quo voluptatem eum sed.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 9,
      //   songId: 11,
      //   body: 'Quia omnis unde saepe qui dolorem id quod. Sit sequi beatae. Eligendi quam sint aut. Odio sint nobis et nobis voluptas nulla qui. Alias consequuntur est aliquam id quos et. Optio illum aliquam quidem ut.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 1,
      //   songId: 8,
      //   body: 'Unde enim nihil quia molestiae consequatur ut. Officia tempore ipsam vel quibusdam hic incidunt hic. Quia officiis odio et nobis commodi fugit quae ea eum.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 23,
      //   songId: 10,
      //   body: 'Quaerat minus alias quia et adipisci. Modi distinctio dolores eum est id at accusamus. In ut officia laudantium.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 15,
      //   songId: 14,
      //   body: 'Sapiente dolor et officiis iure nostrum quo ut quod. Fugit voluptatem iste ullam praesentium ea. Blanditiis natus rem consequatur vel quasi ut quia voluptatibus cupiditate. Eum laborum aliquam quaerat exercitationem consequatur aut quasi rerum perspiciatis.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 10,
      //   songId: 11,
      //   body: 'Unde velit qui quae. Dolores nulla corrupti inventore nostrum incidunt. Quasi illo deserunt.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 4,
      //   songId: 12,
      //   body: 'Ut blanditiis et laudantium odio. Laboriosam doloribus quia ab ut sit. Quam facilis facere ea ut. Voluptatem temporibus incidunt itaque iusto libero quae qui eos.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 17,
      //   songId: 10,
      //   body: 'Sed iure doloribus voluptates accusamus accusantium quibusdam cumque qui cum. Sint itaque eius neque pariatur voluptate quia et. Et exercitationem et provident ad reiciendis sequi et repellat.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 22,
      //   songId: 5,
      //   body: 'Unde laborum rem minus velit. Eum facilis accusantium possimus dolores et magni. Eligendi exercitationem occaecati atque voluptatem. Delectus dolorum atque repellat a beatae eum aut et. Et nihil perspiciatis.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 11,
      //   songId: 12,
      //   body: 'Sint facere illo repellat omnis aut alias. Nostrum unde doloribus et quos dolorem eligendi tempora. Nam culpa autem incidunt occaecati. Est omnis quia voluptatum similique dolor a.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 20,
      //   songId: 5,
      //   body: 'Nesciunt aut recusandae beatae perferendis neque magnam fugit. Et a ut fugiat iure ut occaecati quia assumenda exercitationem. Est fugit magnam ut.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 6,
      //   songId: 8,
      //   body: 'Eum quia dolore ut. Non vel omnis vero. Ea magni est numquam id. Sed aut tempore dolorum cupiditate expedita officiis occaecati recusandae rem. Temporibus expedita est non. Quo suscipit quidem omnis fugiat culpa eos vero aut esse.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 2,
      //   songId: 3,
      //   body: 'Dolore enim placeat repudiandae reprehenderit consectetur et eaque. Ad tenetur optio inventore dignissimos vitae dolores. Expedita harum dolor enim id non amet magni. Dolor mollitia veritatis voluptate quo voluptatem odio ipsum. Facere sed at quis et unde libero voluptatem. Aspernatur ab nemo quia nostrum dolores laboriosam explicabo eius.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 15,
      //   songId: 12,
      //   body: 'Ut consectetur consequatur quia atque dolorem ut ea dignissimos laboriosam. Consequatur voluptas est sint quia velit facilis corrupti a nihil. Fugit facilis qui pariatur in deleniti. Non nulla ducimus qui consequatur nulla fuga pariatur facere hic. Sequi eum possimus eum consequatur quia cumque quam temporibus dolorum.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 9,
      //   songId: 8,
      //   body: 'Debitis et nulla perferendis quod suscipit officia. Amet et error. Sit adipisci delectus et ut ipsa labore molestias. Dolor sit corrupti dolor aut. Dolore adipisci quis.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 20,
      //   songId: 15,
      //   body: 'Vero et quam. Qui sunt non illum fugiat sint assumenda aperiam et. Sit quia veniam ea numquam accusamus rerum ipsam qui.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 10,
      //   songId: 6,
      //   body: 'Ducimus qui non expedita dolores in delectus. Perferendis omnis nulla totam facere sed quasi error et distinctio. Nisi beatae laudantium suscipit voluptas sit est rerum maiores et.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 8,
      //   songId: 14,
      //   body: 'Repudiandae repellat debitis perspiciatis. Cumque id minus exercitationem eos cumque qui dolorum perferendis. Et autem fuga et libero error.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 1,
      //   songId: 10,
      //   body: 'Delectus aut vero totam vitae quis ab ut aut velit. Quia similique error. Autem architecto et. Consequatur eaque consectetur ratione sit itaque porro. Dolore omnis minima voluptatem quae autem officiis accusantium blanditiis. Rerum perspiciatis voluptatem.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 8,
      //   songId: 8,
      //   body: 'Itaque facilis eum omnis quisquam. Totam necessitatibus veritatis. Eos et ab rerum molestiae fuga rerum rerum magni. Eius et dicta quam in inventore ea sed sit blanditiis.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 5,
      //   songId: 7,
      //   body: 'Et quo repudiandae sit facilis veritatis aut. Sunt magnam aut laboriosam fugiat voluptas minus. Praesentium voluptate quis. Dignissimos eum deleniti architecto enim eos aliquam nam. Odio harum saepe.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 9,
      //   songId: 15,
      //   body: 'Dolore aut molestias adipisci magnam officia ex. Voluptate nihil molestias reiciendis beatae. Qui eos quod excepturi sunt nam.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 16,
      //   songId: 12,
      //   body: 'Sint eos temporibus dicta eum et quo. Tempore sint at perspiciatis vel. Ut placeat tenetur. Voluptatem maiores exercitationem sint esse fuga. Veniam optio dolor incidunt porro quia ad tempora culpa voluptatem.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 15,
      //   songId: 8,
      //   body: 'Cupiditate quo et perferendis. Quod quod aut distinctio ipsa. Voluptatem voluptatem excepturi officia eos laborum. Magnam accusamus sit. Ducimus in labore itaque quibusdam facere.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 6,
      //   songId: 2,
      //   body: 'Aut velit non facere voluptatem vitae. Repellendus beatae doloremque voluptatem. Animi ut laudantium. Dolor at debitis. Mollitia nostrum et excepturi. Sapiente molestiae accusantium quaerat in ullam.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 17,
      //   songId: 13,
      //   body: 'Ducimus aperiam eum voluptatum non aliquam. Non exercitationem dignissimos veniam quis. Fuga quia unde voluptatibus laborum sunt. Dignissimos omnis quisquam dicta nesciunt ducimus.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 13,
      //   songId: 2,
      //   body: 'Veritatis et eligendi. Perspiciatis tenetur voluptatum odio reiciendis. Aut doloribus aperiam.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 4,
      //   songId: 8,
      //   body: 'Quos et dolorem. Labore earum animi sapiente. Ea perspiciatis voluptatem sint eum quia magnam. Soluta iure eos.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 12,
      //   songId: 1,
      //   body: 'Voluptas dolorem quia a optio asperiores veniam sequi. Rerum quasi aut magnam eum eum ut minima et. Et error laborum et modi quas quia. Dolor totam et dolor et distinctio. Et qui consequatur corporis autem sint neque corporis et. Et et pariatur adipisci perferendis explicabo atque dolor.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 15,
      //   songId: 2,
      //   body: 'Laboriosam consequuntur qui aperiam rerum debitis odit velit voluptatem. Animi nam omnis dolore. Nostrum ab expedita est quis qui. Doloremque eligendi ipsam non et et dolores iure ratione excepturi. Aut aliquam neque quisquam ullam facilis dignissimos delectus aspernatur aliquid.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 20,
      //   songId: 12,
      //   body: 'Exercitationem excepturi deserunt corporis quia consequatur quis possimus quibusdam. Incidunt sed architecto quidem cupiditate accusamus dolorum unde sapiente. Iure hic magni sint quia et commodi tenetur non. Est quidem in ducimus magnam.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 14,
      //   songId: 9,
      //   body: 'Cumque delectus maxime sit ipsum nam sint. Quam dolorem vel id error sed ratione. Dolorem inventore id occaecati veniam.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 13,
      //   songId: 3,
      //   body: 'Esse placeat officia magnam minus vitae est neque repudiandae assumenda. Qui est repudiandae nam eligendi corrupti ducimus repellat quia voluptatibus. Blanditiis sed totam et quisquam quod at ipsam.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 7,
      //   songId: 9,
      //   body: 'Esse molestiae maxime error quis et excepturi. Eveniet et labore aut sit explicabo nisi ipsam dolores. Molestias aut et autem officia possimus tempore voluptate reiciendis.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 10,
      //   songId: 12,
      //   body: 'Totam enim id ut possimus. Consequatur tempora amet sint ipsa totam omnis quidem sit. Assumenda nihil cumque. Qui aut atque. Aliquam rerum deleniti omnis ipsa voluptatem et aut. Exercitationem non natus voluptates incidunt rem.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 10,
      //   songId: 8,
      //   body: 'Reprehenderit reprehenderit enim est deleniti et iure deleniti accusamus voluptas. Voluptatem commodi molestiae ut est omnis. Molestiae praesentium quia quia cumque. Atque cum ratione. Dolor voluptatem dignissimos fugit rem expedita.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 9,
      //   songId: 11,
      //   body: 'Nemo et quas necessitatibus tenetur sit natus. Officiis voluptate sed voluptates ea. Cupiditate voluptatem sequi eaque. Harum iure assumenda. Optio ipsa corporis iste eos vero sit ut veniam.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 5,
      //   songId: 9,
      //   body: 'Voluptas est qui. Est reiciendis incidunt sint voluptates sapiente quo facilis repellendus. Saepe quasi minus repellat. Quam iusto a necessitatibus repellendus dolor. Veritatis dolor quis. Voluptas sit eos sunt eveniet vel nostrum vel.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 3,
      //   songId: 11,
      //   body: 'Quia sapiente culpa odio ad quia quia. Delectus a perferendis sunt. Quaerat quibusdam porro ut laudantium. Asperiores sed neque eum non deserunt sequi qui laudantium. Distinctio asperiores nobis non sed unde fugiat animi.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 7,
      //   songId: 9,
      //   body: 'Atque odit enim. Assumenda ullam praesentium unde nihil velit aut vel. Illum modi minima minima. Doloribus commodi aut eum quam esse repellendus omnis asperiores. Cupiditate assumenda iusto enim amet aut magni et minima quis.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 20,
      //   songId: 6,
      //   body: 'Non nesciunt voluptas. Velit nihil ut non fuga sapiente culpa enim. Ullam sed ullam libero nisi et et provident distinctio. Et provident ratione sit unde perspiciatis illum ut ut. In quam aut sunt aut vero in ut qui. Molestiae voluptatem pariatur enim.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 20,
      //   songId: 13,
      //   body: 'Nostrum necessitatibus voluptatem dolore. Quis magni culpa est minima autem adipisci consequatur. Labore voluptatem accusantium qui doloribus mollitia vitae et et. Accusantium et nisi consequatur assumenda blanditiis.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 12,
      //   songId: 12,
      //   body: 'Ratione et laboriosam autem id fugit iste enim. Occaecati labore vel. Illum itaque non dignissimos.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 2,
      //   songId: 13,
      //   body: 'Ratione provident non vel vel. Impedit nihil dolore quia et. Consequatur ut id reprehenderit voluptas aut aliquam est ut exercitationem.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 10,
      //   songId: 9,
      //   body: 'Quisquam rerum assumenda consequatur omnis voluptatem. Voluptatum dolores repudiandae est debitis illum autem totam consequatur. Voluptas magni reiciendis fuga dolores quia.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 19,
      //   songId: 10,
      //   body: 'Possimus eaque sed cupiditate numquam. Eius maiores iusto facere vero odit eum voluptatibus in. Cupiditate culpa eius voluptatem. Dolorem dolorem qui est molestiae modi et facere reiciendis. Modi aut officia est. Id possimus recusandae est quibusdam quia quia esse et culpa.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 12,
      //   songId: 8,
      //   body: 'Consequatur accusantium officiis expedita. Tempore sequi recusandae quaerat. Esse tempore quibusdam perferendis reprehenderit sed consequatur. Non laboriosam quaerat earum mollitia enim delectus corrupti.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 3,
      //   songId: 1,
      //   body: 'Est possimus eveniet unde quam incidunt odit consequatur. Provident vitae blanditiis quasi. Quae perferendis corporis sit.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 16,
      //   songId: 6,
      //   body: 'Ad quia voluptatem voluptas. Odit distinctio inventore aliquid et veniam. Aut minima tempora est molestiae suscipit eum aut fugit excepturi.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 23,
      //   songId: 10,
      //   body: 'Quam dolor cumque et iure nulla quos atque. Esse et a. Culpa sit ab qui architecto esse dolores natus. Animi eaque quasi est explicabo vel quaerat sit cupiditate.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 21,
      //   songId: 9,
      //   body: 'Est non officia est. Ab aut voluptates ab amet neque placeat debitis sit. Corporis est sit non praesentium molestiae ea ea. Sed quia quidem officiis esse quo doloribus eos. Id omnis consequatur et consequuntur accusamus tempora omnis temporibus molestiae. Autem eveniet sed culpa voluptas aut nesciunt voluptas.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 10,
      //   songId: 14,
      //   body: 'Rem odio est recusandae aliquam. Ut expedita sunt. Odit debitis alias nisi assumenda. Et doloremque ullam pariatur cum earum pariatur sit. Est dolores vero reiciendis qui accusamus. Itaque qui est ex voluptas.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 9,
      //   songId: 7,
      //   body: 'Enim et fugiat. Rerum inventore suscipit et ut molestiae ullam quos ipsum ut. Nihil mollitia eos eveniet rerum dolore ut voluptatum perferendis. Quis natus repellat illum recusandae reiciendis. Hic consectetur consequuntur. Sit illo quae reprehenderit.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 23,
      //   songId: 10,
      //   body: 'Magni omnis nisi et molestiae neque sit at voluptates. Recusandae voluptas sunt consequatur impedit est enim fugit ea porro. Consequatur aut delectus qui nulla itaque voluptatem laborum.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 23,
      //   songId: 13,
      //   body: 'Animi eum quidem temporibus aut. Et veritatis fugiat aut recusandae vel iusto. Iste dolorem et enim.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 15,
      //   songId: 7,
      //   body: 'Et corrupti in inventore ea porro culpa. Consectetur quia consequatur sunt odio voluptas qui non et. Fugiat maiores culpa voluptatem. Et eum officia aspernatur qui consequuntur.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 16,
      //   songId: 3,
      //   body: 'Impedit sit unde commodi. Natus maiores quasi aut est reiciendis vel voluptatem voluptates. Ducimus vel sit optio id alias ut. Iste et et soluta rem quo eum. Voluptatem id consectetur voluptates.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 14,
      //   songId: 15,
      //   body: 'Voluptas id aliquid. Atque nisi est quam. Veritatis vel est et fugiat aliquam qui. Earum nobis voluptate totam quibusdam quis ex ratione.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 7,
      //   songId: 15,
      //   body: 'Est rerum error veritatis doloribus qui omnis. Et iure quibusdam aut dolores sit consequatur illo suscipit. Sint incidunt hic qui veritatis est sit voluptatem sequi. Exercitationem et repellat at illum molestiae. Est officiis voluptatum. Totam quia deleniti laboriosam aut nostrum blanditiis et facilis.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 14,
      //   songId: 7,
      //   body: 'Saepe nisi nemo. Sed odio esse. Consequuntur assumenda nam et et temporibus aut. Aperiam cumque voluptate architecto voluptatum ut. Quia rerum consequatur id quo.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
      // {
      //   userId: 5,
      //   songId: 8,
      //   body: 'Enim iusto et quod iure autem fugiat provident. Cupiditate dignissimos quam. Itaque consequatur soluta dolore voluptatem.',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // } ,
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
