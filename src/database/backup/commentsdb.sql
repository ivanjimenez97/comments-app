-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 04-10-2024 a las 21:11:10
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `commentsdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` bigint NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`id`, `email`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Marshall_Raynor97@gmail.com', 'Color urbs deleo sumo deleo.\nDeorsum sustineo arbustum assentator appono vivo totam via natus.\nDeludo utilis terebro decet.', '2024-10-04 00:15:36', '2024-10-04 20:54:27'),
(2, 'Yasmin.Gislason69@hotmail.com', 'Capitulus blandior cauda vitiosus calamitas solvo.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(3, 'Gisselle20@hotmail.com', 'Deprimo allatus stultus cruciamentum curso.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(4, 'Jennie.Graham@yahoo.com', 'Suffoco sperno veritas baiulus tenuis thesis sopor vae cibo amoveo.\nSono corroboro tamquam.\nUtrum perspiciatis caveo vigor utrum arma amitto audio.\nUstilo absque tumultus.', '2024-10-04 00:15:36', '2024-10-04 03:30:28'),
(5, 'Otto71@hotmail.com', 'Temeritas absque magnam vestrum alioqui deorsum thesaurus varietas concedo. Copia celo vespillo. Defaeco cras comprehendo caste viscus validus. Eum quia tabgo decumbo.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(6, 'Chandler7@yahoo.com', 'Valetudo deleniti desino umquam strues cetera sufficio aggredior. Theologus solitudo vapulus arcesso atque usitas tardus subito labore suggero. Verbera attonbitus sublime balbus uredo nobis cito adhaero.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(8, 'Buddy_Beer92@hotmail.com', 'Capto demitto animadverto.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(9, 'Nina_Reynolds@yahoo.com', 'Maiores abutor teres admoveo solvo alii.\nDefessus quae votum aestivus crinis.\nReprehenderit cohaero confido.\nTondeo accusator undique voluptas.\nAngulus sed odio admoneo.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(10, 'Ulises84@yahoo.com', 'Credo stillicidium tempus doloribus verus tristis campana.\nExplicabo admitto adaugeo nemo.\nDepopulo abundans aureus crepusculum ceno dolorum cultura vereor nulla ascit.\nTabesco traho reiciendis casso creo claustrum.\nCunabula arca amplitudo copia tenus derideo.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(11, 'Rocky_Bayer8@gmail.com', 'Pecus stipes uredo damno thesaurus teres talus auditor. Stella deinde solio derideo talis accusantium.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(12, 'Vicenta_Mitchell96@gmail.com', 'Beatae talus laudantium cupressus voluptatum deleniti claro patior.\nTestimonium paens desipio tamdiu repudiandae custodia.\nCorroboro cruentus ater.\nStella derideo vox tamen in velociter.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(13, 'Jonatan_Stehr@yahoo.com', 'Desolo tollo adflicto utilis vinculum valeo demonstro agnosco doloribus solio.\nAudentia creo apto decens ut arguo civitas combibo turpis.\nDesino alter copiose adeo statua tametsi cilicium usus.\nCetera ustulo cultura amoveo peior ex aspicio.\nSubvenio combibo calcar quod tabula anser theca truculenter asper.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(14, 'Sanford_Monahan74@gmail.com', 'Texo degero eveniet claudeo. Decumbo vir trans damnatio certe viscus advoco supellex alienus tristis. Cupio atqui ancilla bellum corona pax ipsa suppellex.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(15, 'Grover.Collier@yahoo.com', 'Vulnero attonbitus repudiandae atque nulla adeptio cernuus. Attollo atqui barba eveniet ustilo tondeo culpo aedificium. Adopto inflammatio colligo terebro vis xiphias cunctatio.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(16, 'Kenton_Schmitt58@gmail.com', 'Demo bardus vespillo corporis ocer argumentum patruus adhaero tamisium via.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(17, 'Meda_Huels58@gmail.com', 'Tot campana sunt bonus sto aegrotatio nulla voro utilis.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(18, 'Cicero.Stoltenberg49@yahoo.com', 'Alveus usitas aequitas verecundia collum spero adulatio aequitas creber totidem.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(19, 'Horace_Blick@yahoo.com', 'Assumenda thermae ventus ventosus aspernatur decerno ustilo pax sono. Tenus vinitor carbo stips calculus curiositas canis capitulus. Adsidue pecus curatio magni demo dolorum subito textor. Asper brevis textor eos. Debeo aurum ut stabilis cibo concedo cometes defendo super.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(20, 'Julien_Cartwright@gmail.com', 'Derelinquo impedit studio urbs demens colligo acceptus aptus.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(21, 'Marion_Spinka@gmail.com', 'Carus amplus carbo. Deleniti adeptio accusantium aureus.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(22, 'Pasquale.Schulist@yahoo.com', 'Absque cena sum corrumpo quo denego ubi sono vetus adimpleo. Defessus aggredior esse soluta. Caries vesica omnis distinctio degusto spiritus vestigium. Utilis cubitum depopulo sodalitas sulum accedo arca itaque tremo balbus. Cauda adimpleo apostolus cribro audeo bellum natus videlicet.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(23, 'Lou96@hotmail.com', 'Decipio coruscus terminatio verumtamen tondeo ascisco agnosco strenuus decor cauda. Coma aedificium vivo.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(24, 'Darian98@gmail.com', 'Video substantia volutabrum sumptus studio. Suspendo ademptio desolo aliquam nobis despecto explicabo saepe. Carcer cito tracto candidus tantillus cras.\nCattus volup desparatus venio aestus tam. Versus creator alveus atavus ager non. Tendo colligo alii vinum casso.\nContra dignissimos suppellex velit toties stella tergo utpote bardus. Error demens sortitus non vulnero communis spes. Comedo avaritia acceptus creator aveho pauci succurro cui.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(25, 'Terrance54@hotmail.com', 'Quia arbor colligo contabesco unus. Eaque amo tot adeptio pecco in arguo. Strues suspendo synagoga suggero super video cubo aperte defetiscor.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(26, 'Friedrich_Glover27@gmail.com', 'Decumbo advoco virtus agnitio valeo collum.\nCommodo amita conduco appello acies clibanus torqueo curia vos.\nConculco suppellex curo adamo crudelis adulescens aequitas vicissitudo tergiversatio solium.\nSortitus ter considero aut sufficio aliqua explicabo.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(27, 'Demetris.Hoeger@hotmail.com', 'Asperiores vulgaris abscido combibo cattus viduo arcesso tunc sponte. Torrens libero varietas suus spero bonus. Deleo paulatim adfero cibo suus acquiro.\nMinus ulciscor apto atavus inflammatio paulatim caveo. Caveo desipio carcer suppono. Coerceo ad comptus corporis amitto alius tondeo ait ver talis.\nSummisse tandem comptus culpo candidus comparo sonitus communis quae solutio. Adhuc aeternus balbus utor. Antepono adsidue vitae conturbo aduro socius ver.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(28, 'Noemie17@hotmail.com', 'Basium stipes creo earum ipsum deorsum corroboro. Est coaegresco desparatus delinquo adeo assentator alter. Damno thermae voveo abbas.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(29, 'Mitchell_Jacobson56@yahoo.com', 'Vel cras aveho tantum calco tamquam ascisco conicio.\nAger caelestis apto stipes curiositas tardus suppono cunae.', '2024-10-04 00:15:36', '2024-10-04 00:15:36'),
(31, 'test@test.com', 'Lorem Ipsum', '2024-10-04 03:22:19', '2024-10-04 03:22:19'),
(32, 'test2@test.com', 'Test Comment 2', '2024-10-04 03:26:36', '2024-10-04 03:26:36'),
(33, 'test3@test.com', 'Test Comment 3', '2024-10-04 03:31:44', '2024-10-04 03:31:44'),
(34, 'test4@test.com', 'This is The Test number 4.', '2024-10-04 03:48:52', '2024-10-04 03:48:52'),
(35, 'test5@test.com', 'Test number 5', '2024-10-04 20:54:44', '2024-10-04 20:54:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Super Admin'),
(2, 'Admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `roleId` bigint NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `phone`, `roleId`, `createdAt`, `updatedAt`) VALUES
(1, 'John', 'Doe', 'johndoe@testmail.com', '$2a$10$sqHfmaRcGzLhtCw3hjZ.NuKfOQkVXZgGR0QcMmBhe5.2DioS/B4ei', '9876543210', 1, '2024-10-03 23:57:10', '2024-10-04 00:05:18');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
