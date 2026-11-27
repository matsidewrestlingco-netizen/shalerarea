// Shaler Area champions & placers (from shaler_champs_placers.xlsx). Used by champions.html.
//
// TO ADD A RESULT: add one line under the right level. One result per line:
//   Last, First|Year|Division|Grade|Weight|Place
// Place "1st" counts as a champion; anything else is a placer. Leave a field
// empty (nothing between the bars) if it isn't known. Division is AAA, A, or
// GIRLS; Girls results get a "Girls" tag. Spell a wrestler's name the same way
// every time so their results group together.
//
// State champions come from the Home page list. Their weight and grade were
// filled in from the same season's WPIAL result where there was one.
window.SA_HONORS = (() => {
  const raw = {
    'State': `Peery, Edwin|1951||SO|112|1st
Peery, Edwin|1952||JR|120|1st
Kopnisky, Bob|1961||SR|154|1st
Nellis, Keith|1973||SR|112|1st
Siar, Bob|1979|AAA|||1st
Nellis, Ken|1980|AAA|||1st
Nellis, Ken|1981|AAA|||1st
Nellis, Kyle|1982|AAA|||1st
Shapert, Shaun|1996|AAA|||1st
Letters, Troy|2000|AAA|JR|152|1st
Letters, Troy|2001|AAA|SR|160|1st
Nelson, Nick|2007|AAA|SR|145|1st
Sullivan, Ryan|2018|AAA|JR|113|1st
Letters, Taylor|2001|AAA|SO|140|2nd
Letters, Troy|1999|AAA|SO|145|2nd
Moran, Mickey|2004|AAA|SR|160|2nd
Nellis, Kevin|1974|A|SR|105|2nd
Nellis, Kraig|1979|AAA|SR|112|2nd
Nellis, Kyle|1980|AAA|SO|98|2nd
Nelson, Nick|2006|AAA|JR|140|2nd
Peery, Edwin|1953||SR|120|2nd
Siar, Bob|1977|AAA|SO|132|2nd
Sullivan, Ryan|2017|AAA|SO|106|2nd
Letters, Taylor|2003|AAA|SR|152|3rd
Moran, Mickey|2003|AAA|JR|160|3rd
Nelson, Nick|2005|AAA|SO|135|3rd
Yuiska, Mike|1987|AAA|JR|126|3rd
Letters, Blythe|2026|GIRLS|SO|106|3rd
Benko, Pat|1978|AAA|JR|167|4th
Nellis, Kraig|1978|AAA|JR|98|4th
Zimmerman, Greg|1982|AAA|JR|138|4th
Zimmerman, Greg|1983|AAA|SR|138|4th
Naccarato, Ken|1987|AAA|SR|167|5th
Shapert, Ryan|1995|AAA|JR|119|5th
Yuiska, Mike|1988|AAA|SR|126|5th
D'Amico, Ron|2017|AAA|SR|220|6th
Dischner, Randy|1994|AAA|SR|130|6th
Schilling, D.J.|1999|AAA|JR|135|6th
Ford, Joe|1999|AAA|SR|140|7th
Fulmer, Eric|2007|AAA|SR|189|7th
Lehmeier, Brandon|2001|AAA|SR|189|7th
Letters, Taylor|2002|AAA|JR|145|7th
Nelson, Matt|2004|AAA|FR|125|8th
Nelson, Nick|2004|AAA|FR|135|8th`,

    'Regional': `Letters, Blythe|2026|GIRLS|SO|106|1st
Alcalde, Gianna|2026|GIRLS|FR|100|4th
Letters, Blythe|2025|GIRLS|FR|100|3rd`,

    'WPIAL': `Brown, Rick|1968||JR|250|1st
Kopnisky, Bob|1961||SR|154|1st
Kuzniewski, John|1960||JR|180|1st
Lehmeier, Brandon|2001|AAA|SR|189|1st
Letters, Taylor|2002|AAA|JR|145|1st
Letters, Troy|1999|AAA|SO|145|1st
Letters, Troy|2000|AAA|JR|152|1st
Letters, Troy|2001|AAA|SR|160|1st
Moran, Mickey|2003|AAA|JR|160|1st
Nellis, Keith|1973||SR|112|1st
Nellis, Kevin|1973||JR|98|1st
Nelson, Matt|2006|AAA|JR|130|1st
Nelson, Nick|2007|AAA|SR|145|1st
Peery, Edwin|1951||SO|112|1st
Peery, Edwin|1952||JR|120|1st
Peery, Edwin|1953||SR|120|1st
Relyea, John|1964||JR|112|1st
Sullivan, Ryan|2018|AAA|JR|113|1st
Tokar, Ray|1964||SR|UNL|1st
Ashbaugh, John|1959||SO|88|2nd
Brown, John|1952||SR|112|2nd
Brown, Rick|1969||SR|250|2nd
Dodd, Herb|1957||JR|112|2nd
Fulmer, Eric|2007|AAA|SR|189|2nd
Golla, Bill|1960||SR|145|2nd
Hartman, Jake|2016|AAA|SR|145|2nd
Jerabek, Ross|1970||JR|112|2nd
Jones, Ed|1960||SR|UNL|2nd
Kopnisky, Bob|1959||SO|133|2nd
Lehmeier, Brandon|2000|AAA|JR|171|2nd
Letters, Taylor|2001|AAA|SO|140|2nd
Letters, Taylor|2003|AAA|SR|152|2nd
Moran, Mickey|2004|AAA|SR|160|2nd
Nelson, Matt|2004|AAA|FR|125|2nd
Nelson, Matt|2005|AAA|SO|130|2nd
Nelson, Nick|2004|AAA|FR|135|2nd
Nelson, Nick|2005|AAA|SO|135|2nd
Nelson, Nick|2006|AAA|JR|140|2nd
Rihn, Thomas (Tim)|1959||SR|165|2nd
Schilling, D.J.|1999|AAA|JR|135|2nd
Seifert, John (Jack)|1954||SR|165|2nd
Sullivan, Ryan|2017|AAA|SO|106|2nd
Letters, Blythe|2025|GIRLS|FR|100|2nd
Letters, Blythe|2026|GIRLS|SO|106|2nd
D'Amico, Ron|2017|AAA|SR|220|3rd
Ford, Tom|2000|AAA|SR|112|3rd
Moran, Mickey|2002|AAA|SO|152|3rd
Reinsfelder, Garrett|2018|AAA|SR|132|3rd
Schilling, D.J.|2000|AAA|SR|135|3rd
Ford, Joe|1999|AAA|SR|140|4th
Fulmer, Eric|2006|AAA|JR|160|4th
Heinl, Mike|2015|AAA|JR|126|4th
Letters, Taylor|2000|AAA|FR|130|4th
Schmitt, Matt|1999|AAA|SR|130|4th
Paladin, Charlotte|2026|GIRLS|SO|190|4th
Alcalde, Gianna|2026|GIRLS|FR|100|5th
Gilbert, McKenzie|2026|GIRLS|SR|170|6th`,

    'Section': `Ashbaugh, John|1959||SO|88|1st
Ashbaugh, John|1960||JR|103|1st
Ashbaugh, John|1961||SR|112|1st
Bencivenga, Vince|1972||SR|180|1st
Bozzo, Frank|1953||SR|185|1st
Brown, Rick|1968||JR|250|1st
Brown, Rick|1969||SR|250|1st
Cavanaugh, Mike|1969||SO|88|1st
Cavanaugh, Terry|1969||SR|103|1st
Collins, Jim|1970||SR|145|1st
Conroy, Jamal|2010|AAA|SR|285|1st
Cramp, Dave|1960||SO|88|1st
D'Amico, Ron|2017|AAA|SR|220|1st
Dick, Harry|1956||JR|103|1st
Dillman, Alvin|1953||SR|154|1st
Dillman, Leslie|1956||SR|185|1st
Dluhos, Dylan|2002|AAA|SO|130|1st
Dodd, Herb|1957||JR|112|1st
Dodd, Herb|1958||SR|120|1st
Dubis, Dave|1970||JR|88|1st
Dubis, Dave|1971||SR|95|1st
Eisenhower, Jim|1961||SR|133|1st
Ellenberger, Tim|1966||SR|120|1st
Ellenberger, Tom|1966||SR|112|1st
Elmeier, Neil|1973||SR|145|1st
Etzel, Jack|1954||JR|154|1st
Fleming, Josh|2009|AAA|JR|171|1st
Fleming, Steve|2005|AAA|JR|112|1st
Ford, Joe|1999|AAA|SR|140|1st
Fulmer, Eric|2007|AAA|SR|189|1st
Giel, Andy|2000|AAA|SR|125|1st
Giel, Dave|1973||JR|132|1st
Golla, Bill|1960||SR|145|1st
Graber, Ken|1972||JR|127|1st
Graber, Ken|1973||SR|126|1st
Greenen, Tom|1968||SR|165|1st
Grundler, Frank|1961||SR|165|1st
Hartman, Jake|2014|AAA|SO|132|1st
Hartman, Jake|2016|AAA|SR|145|1st
Heinl, Mike|2015|AAA|JR|126|1st
Heinl, Mike|2016|AAA|SR|132|1st
Holder, Bill|1971||SR|180|1st
Isett, Jack|1957||JR|165|1st
Jazbinsek, John|1970||JR|103|1st
Jerabek, Ross|1970||JR|112|1st
Jones, Ed|1960||SR|UNL|1st
Kopnisky, Bob|1959||SO|133|1st
Kopnisky, Bob|1960||JR|138|1st
Kopnisky, Bob|1961||SR|154|1st
Kushon, Jim|1965||SR|180|1st
Kuzniewski, John|1960||JR|180|1st
Kuzniewski, John|1961||SR|180|1st
Kuzniewski, Regis|1964||SR|180|1st
LaFerriere, Rick|1968||SR|138|1st
Lehmeier, Brandon|2000|AAA|JR|171|1st
Lehmeier, Brandon|2001|AAA|SR|189|1st
Letters, Taylor|2000|AAA|FR|130|1st
Letters, Taylor|2001|AAA|SO|140|1st
Letters, Taylor|2002|AAA|JR|145|1st
Letters, Taylor|2003|AAA|SR|152|1st
Letters, Troy|1999|AAA|SO|145|1st
Letters, Troy|2000|AAA|JR|152|1st
Letters, Troy|2001|AAA|SR|160|1st
Linder, Raymond|1954||JR|138|1st
Linder, Raymond|1955||SR|145|1st
Massucci, Dave|1970||JR|133|1st
Massucci, Dave|1971||SR|133|1st
McCloskey, Chuck|1970||SR|154|1st
Miller, Jeff|1973||SR|167|1st
Miller, Rayburn|1956||SO|120|1st
Miller, Rayburn|1957||JR|120|1st
Mitsch, John|1971||JR|145|1st
Mitsch, John|1972||SR|154|1st
Moran, Mickey|2001|AAA|FR|152|1st
Moran, Mickey|2002|AAA|SO|152|1st
Moran, Mickey|2003|AAA|JR|160|1st
Moran, Mickey|2004|AAA|SR|160|1st
Myers, Roger|1973||SO|105|1st
Nellis, Keith|1973||SR|112|1st
Nellis, Kevin|1972||SO|88|1st
Nellis, Kevin|1973||JR|98|1st
Nelson, Matt|2004|AAA|FR|125|1st
Nelson, Matt|2005|AAA|SO|130|1st
Nelson, Matt|2006|AAA|JR|130|1st
Nelson, Nick|2004|AAA|FR|135|1st
Nelson, Nick|2005|AAA|SO|135|1st
Nelson, Nick|2006|AAA|JR|140|1st
Nelson, Nick|2007|AAA|SR|145|1st
Newhouse, Neal|1956||SO|88|1st
Newhouse, Neal|1958||SR|112|1st
O'Connell, Bob|1967||JR|127|1st
Peery, Edwin|1953||SR|120|1st
Pollak, Jake|2017|AAA|SO|152|1st
Reinsfelder, Garrett|2018|AAA|SR|132|1st
Relyea, John|1964||JR|112|1st
Rihn, Thomas (Tim)|1959||SR|165|1st
Schatzel, Don|1957||SR|145|1st
Schilling, D.J.|1999|AAA|JR|135|1st
Schmitt, Dave|1967||SR|112|1st
Schmitt, Matt|1999|AAA|SR|130|1st
Scott, Harry|1961||SR|145|1st
Seaton, Tom|1968||JR|145|1st
Seaton, Tom|1969||SR|145|1st
Seger, Toby|2001|AAA|FR|103|1st
Seger, Toby|2004|AAA|SR|119|1st
Settina, Fred|1956||SR|127|1st
Squitieri, Conrad|1973||SO|138|1st
Sudetic, Jim|1973||SR|250|1st
Sullivan, Ryan|2017|AAA|SO|106|1st
Sullivan, Ryan|2018|AAA|JR|113|1st
Sullivan, Ryan|2019|AAA|SR|120|1st
Tokar, Ray|1964||SR|UNL|1st
Van Kirk, Ron|1969||JR|127|1st
Van Kirk, Ron|1970||SR|127|1st
Walker, Calvin|1956||JR|95|1st
Walker, Calvin|1957||SR|103|1st
Yeckel, Ben|1999|AAA|JR|189|1st
Yeckel, Ben|2000|AAA|SR|189|1st
Yoder, Jim|1956||SR|133|1st
Benko, Dave|1973||SO|155|2nd
Blackham, Bob|1960||JR|127|2nd
Buchser, Tom|1968||JR|95|2nd
Buchser, Tom|1969||SR|112|2nd
Burkhart, Chuck|1972||JR|138|2nd
Cable, Jonah|2026|AAA|JR|139|2nd
Case, Duff|1964||SO|95|2nd
Case, Duff|1966||SR|127|2nd
Collins, Jim|1969||JR|154|2nd
Conroy, Jamal|2008|AAA|SO|285|2nd
Cook, Brian|2002|AAA|SR|135|2nd
Cramp, Dave|1961||JR|95|2nd
Diettinger, Don|1953||SR|133|2nd
Drzemiecki, Jon|2003|AAA|FR|103|2nd
Drzemiecki, Jon|2004|AAA|SO|103|2nd
Drzemiecki, Jon|2006|AAA|SR|119|2nd
Elmeier, Neil|1972||JR|145|2nd
Etzel, Jack|1955||SR|154|2nd
Fisher, Joe|1965||SR|154|2nd
Fleming, Josh|2010|AAA|SR|171|2nd
Fleming, Steve|2004|AAA|SO|112|2nd
Ford, Tom|2000|AAA|SR|112|2nd
Fulmer, Eric|2006|AAA|JR|160|2nd
Giel, Andy|1999|AAA|JR|125|2nd
Grau, Ken|1972||SO|103|2nd
Gray, Kevin|2006|AAA|JR|275|2nd
Guerre, Tony|1953||SR|127|2nd
Heinl, Logan|2013|AAA|FR|120|2nd
Heinl, Mike|2014|AAA|SO|120|2nd
Henderson, John|1963||JR|112|2nd
Hissrich, Henry|1957||SO|88|2nd
Hissrich, Henry|1959||SR|112|2nd
Jazbinsek, John|1969||SO|95|2nd
Jazbinsek, John|1971||SR|112|2nd
Jerabek, Ross|1971||SR|127|2nd
Jones, Anthony|2024|AAA|FR|107|2nd
Jones, Anthony|2025|AAA|SO|107|2nd
Jones, Anthony|2026|AAA|JR|114|2nd
Kushon, Jim|1964||JR|165|2nd
Lehmeier, Brandon|1999|AAA|SO|171|2nd
Love, Charles|1968||SR|88|2nd
Malone, Mike|1963||SR|154|2nd
Mason, Lloyd|1968||SR|127|2nd
Massimiani, Lou|2002|AAA|SO|160|2nd
Massucci, Rich|1964||JR|133|2nd
Mazer, Ted|2012|AAA|SO|113|2nd
McGonigle, Jordan|2012|AAA|FR|106|2nd
Mohler, Gary|1972||JR|120|2nd
Nellis, Keith|1971||SO|103|2nd
Nellis, Keith|1972||JR|112|2nd
Newhouse, Neal|1957||JR|95|2nd
O'Connell, Bob|1968||SR|133|2nd
Passione, Dino|2006|AAA|FR|152|2nd
Philips, Bob|1955||JR|185|2nd
Rastetter, Eric|2000|AAA|SR|145|2nd
Relyea, John|1963||SO|103|2nd
Rihn, Thomas (Tim)|1957||SO|154|2nd
Roberts, Thom|1962||JR|120|2nd
Rogers, Doug|2008|AAA|JR|215|2nd
Rogers, Doug|2009|AAA|SR|215|2nd
Schatzel, Don|1956||JR|138|2nd
Schmitt, Dave|1966||JR|103|2nd
Seaton, Bob|1961||JR|138|2nd
Seger, Toby|2002|AAA|SO|112|2nd
Seifert, John (Jack)|1954||SR|165|2nd
Settina, Fred|1953||FR|95|2nd
Settina, Fred|1955||JR|120|2nd
Sibenac, Andy|2007|AAA|SR|140|2nd
Sibenac, Dave|2001|AAA|SO|145|2nd
Sibenac, Dave|2003|AAA|SR|189|2nd
Szurszewiski, Chuck|1970||SR|138|2nd
Torchia, Tom|1999|AAA|JR|275|2nd
Vargo, Paul|1960||SO|95|2nd
Wetzel, Ray|1956||SR|145|2nd
Williams, Wade|1972||SR|133|2nd
Winters, Dylan|2017|AAA|JR|120|2nd
Yoder, Jim|1955||JR|127|2nd
Barravecchio, Vito|2024|AAA|SO|215|3rd
Barto, Ben|2000|AAA|SR|119|3rd
Cervi, Lou|2006|AAA|SR|112|3rd
Cignetti, Trevor|2025|AAA|JR|215|3rd
Conroy, Jamal|2009|AAA|JR|285|3rd
Cook, Brian|2001|AAA|JR|130|3rd
D'Amico, Ron|2016|AAA|JR|195|3rd
Dluhos, Dylan|2001|AAA|FR|125|3rd
Drzemiecki, Jon|2005|AAA|JR|119|3rd
Emmons, Weston|2026|AAA|SO|160|3rd
Fleming, Josh|2008|AAA|SO|171|3rd
Ford, Mike|2002|AAA|JR|119|3rd
Gray, Kevin|2007|AAA|SR|285|3rd
Gust, Bryan|2002|AAA|SR|171|3rd
Heinl, Austin|2013|AAA|JR|132|3rd
Heinl, Mike|2013|AAA|FR|106|3rd
Madsen, Niels|2003|AAA|JR|215|3rd
Massimiani, Lou|2001|AAA|FR|135|3rd
McGonigle, Jordan|2013|AAA|SO|126|3rd
McGorry, Ryan|1999|AAA|SR|160|3rd
Pollak, Jake|2016|AAA|FR|152|3rd
Reinsfelder, Garrett|2015|AAA|FR|120|3rd
Reinsfelder, Garrett|2017|AAA|JR|132|3rd
Sagi, Ray|2006|AAA|SO|215|3rd
Scarberry, Ian|2018|AAA|JR|138|3rd
Scarberry, Ian|2019|AAA|SR|138|3rd
Schilling, D.J.|2000|AAA|SR|135|3rd
Seger, Toby|2003|AAA|JR|125|3rd
Tomer, Rich|2007|AAA|SR|130|3rd
Torchia, Tom|2000|AAA|SR|275|3rd
Warren, Eric|2016|AAA|SO|126|3rd
Warren, Eric|2017|AAA|JR|138|3rd
Wise, Ken|2004|AAA|SR|171|3rd
Barravecchio, Vito|2023|AAA|FR|215|4th
Bonnette, Jeff|2018|AAA|JR|285|4th
Cable, Jonah|2024|AAA|FR|127|4th
Cervi, Lou|2005|AAA|JR|103|4th
Demore, Jimmy|2016|AAA|SR|170|4th
Gross, Ethan|2022|AAA|JR|189|4th
Heinl, Austin|2012|AAA|SO|120|4th
Lenkner, Dustin|2019|AAA|JR|113|4th
McGonigle, Jordan|2014|AAA|JR|145|4th
Pollak, Jake|2018|AAA|JR|160|4th
Popinski, Jordan|2007|AAA|JR|215|4th
Rastetter, Eric|1999|AAA|JR|152|4th
Scarberry, Ian|2016|AAA|FR|113|4th
Scarberry, Ian|2017|AAA|SO|126|4th
Schearer, Ed|2017|AAA|SR|145|4th
Sieber, John|2007|AAA|SO|119|4th
Ulery, Michael|2023|AAA|JR|160|4th
Barravecchio, Vito|2025|AAA|JR|285|5th
Cable, Jacob|2023|AAA|JR|139|5th
Cable, Jacob|2024|AAA|SR|145|5th
Cable, Jonah|2025|AAA|SO|133|5th
Carey, Nick|2012|AAA|JR|220|5th
Cignetti, Trevor|2026|AAA|SR|285|5th
D'Amico, Ron|2015|AAA|SO|152|5th
DeLeonibus, Nevio|2022|AAA|JR|120|5th
Demore, Jimmy|2014|AAA|SO|170|5th
Dibon, Mason|2022|AAA|SR|215|5th
Heinl, Austin|2014|AAA|SR|138|5th
Montgomery, Callum|2022|AAA|SR|152|5th
Reinsfelder, Garrett|2016|AAA|SO|138|5th
Tavella, Ayden|2025|AAA|FR|127|5th
Tunstall, Carter|2023|AAA|FR|127|5th
Tunstall, Cole|2025|AAA|FR|121|5th
Ulery, Michael|2022|AAA|SO|160|5th
Winters, Dylan|2016|AAA|SO|120|5th
Demore, Jimmy|2015|AAA|JR|182|6th
Heinl, Logan|2015|AAA|JR|170|6th
Ronel, Braylon|2024|AAA|FR|121|6th
Tunstall, Cole|2026|AAA|SO|121|6th
Weber, Alex|2025|AAA|SR|160|6th
Winters, Dylan|2015|AAA|FR|106|6th
Winters, Dylan|2018|AAA|SR|126|6th`
  };

  // Wrestling families: the family name plus each member exactly as spelled above.
  // The page pulls each member's titles from the results. Empty = section hidden.
  const families = [];

  const levels = Object.keys(raw);
  const results = levels.flatMap(level => raw[level].trim().split('\n').map(line => {
    const [name, year, div, grade, weight, place] = line.split('|').map(s => s.trim());
    const [last, first] = name.split(',').map(s => s.trim());
    return { level, name, display: first ? `${first} ${last}` : last, last, year: +year, div, grade, weight, place, champ: place === '1st' };
  }));

  return { levels, results, families };
})();
