// 2026–27 season data (from SA_Schedules.docx). Used by the Home and Team pages.
//
// TO UPDATE THE SCHEDULE: edit the lines below. One event per line:
//   Day, Mon D|Event name|Time|Location
// Start the event name with "at " for Away or "vs. " for Home. Anything at
// Shaler Area / Gym A also counts as Home. Everything else shows as "Event".
// Coaches are listed at the bottom of this file.
window.SA_SEASON = (() => {
  const raw = {
    'Boys Varsity': `Fri, Dec 4|Chartiers-Houston Invitational|3:45 PM|Senior High Gym
Sat, Dec 5|Chartiers-Houston Invitational|9:15 AM|Senior High Gym
Wed, Dec 9|vs. Plum (Dual)|7:00 PM|Shaler Area High School- Gym A
Sat, Dec 12|Moon Duals|TBA|High School Gymnasium
Wed, Dec 16|at North Allegheny (Dual)|7:00 PM|North Allegheny Senior High School
Sat, Dec 19|Middletown Classic Tournament|9:30 AM|Middletown High School
Sun, Dec 20|Middletown Classic Tournament|9:30 AM|Middletown High School
Wed, Dec 30|St. Clairsville Whiteside Invitational|9:00 AM|St. Clairsville High School
Wed, Jan 13|at North Hills (Dual)|7:00 PM|NH High School Gym
Fri, Jan 15|Allegheny Co Tournament|10:30 AM|FXC HS Main Gym
Sat, Jan 16|Allegheny Co Tournament|10:00 AM|FXC HS Main Gym
Wed, Jan 20|vs. Central Catholic, Penn Hills (Duals)|7:00 PM|Shaler Area High School- Gym A
Wed, Jan 27|at WPIAL Championships|TBA|
Mon, Feb 1|at WPIAL Championships|TBA|
Sat, Feb 6|at WPIAL Championships|TBA|
Wed, Feb 10|vs. Fox Chapel (Dual)|7:00 PM|Shaler Area High School- Gym A
Sat, Feb 13|at WPIAL Championships|TBA|
Fri, Feb 26|at WPIAL Championships|TBA|
Sat, Feb 27|at WPIAL Championships|TBA|`,
    'Girls Varsity': `Wed, Dec 9|vs. Plum (Dual)|6:00 PM|Shaler Area High School- Gym A
Sat, Dec 12|at Knoch|9:30 AM|Knoch HS Gymnasium
Wed, Dec 16|at Gateway|6:00 PM|Shaler Area High School- Gym A
Sun, Dec 20|Middletown Classic Tournament|4:00 PM|Middletown High School
Mon, Dec 21|Middletown Classic Tournament|9:00 AM|Middletown High School
Sun, Jan 3|Southmoreland Tournament|TBA|Southmoreland High School Gymnasium
Wed, Jan 13|at North Hills (Dual)|6:00 PM|NH High School Gym
Fri, Jan 22|North Allegheny Invitational|TBA|NASH Gym
Sat, Jan 23|North Allegheny Invitational|TBA|NASH Gym
Sat, Jan 30|Butler Invitational|9:30 AM|Butler Intermediate Gym
Mon, Feb 1|at WPIAL Championships|TBA|
Sat, Feb 6|at WPIAL Championships|TBA|
Wed, Feb 10|vs. Fox Chapel (Dual)|6:00 PM|Shaler Area High School- Gym A
Fri, Feb 26|at WPIAL Championships|TBA|
Sat, Feb 27|at WPIAL Championships|TBA|`,
    'Junior High': `Sat, Dec 5|Titan Duals|9:00 AM|Shaler Area High School- Gym A
Wed, Dec 9|vs. Plum (Duals)|5:00 PM|Shaler Area High School- Gym A
Fri, Jan 8|Allegheny Co JH Championship|4:30 PM|Shaler Area High School- Gym A
Sat, Jan 9|Allegheny Co JH Championship|10:00 AM|Shaler Area High School- Gym A
Wed, Jan 13|at North Hills (Dual)|5:00 PM|NH High School Gym
Fri, Jan 22|Monroeville Mat Madness Tournament|4:30 PM|Monroeville Convention Center
Sat, Jan 23|Monroeville Mat Madness Tournament|9:45 AM|Monroeville Convention Center
Sat, Jan 30|Kiski Duals|TBA|Gym A
Sat, Feb 6|Trinity Duals|9:00 AM|HS Main Gym
Wed, Feb 10|at Fox Chapel (Dual)|1:30 PM|DMS Main Gym
Fri, Feb 12|District 7 Tournament|3:30 PM|Bethel Park High School
Sat, Feb 13|District 7 Tournament|9:00 AM|Bethel Park High School`
  };
  const M = { Dec: 11, Jan: 0, Feb: 1, Mar: 2, Nov: 10 };
  const events = [];
  for (const [team, txt] of Object.entries(raw)) {
    for (const line of txt.split('\n')) {
      const [d, opp, time, loc] = line.split('|');
      const [dow, md] = d.split(', ');
      const [mon, day] = md.split(' ');
      const yr = M[mon] >= 10 ? 2026 : 2027;
      const tag = /^at /.test(opp) ? 'Away' : (/^vs\. /.test(opp) || /Shaler Area|Gym A/.test(loc)) ? 'Home' : 'Event';
      events.push({ team, dow, mon, day, date: md, opp, time, loc: loc || 'Location TBA', ha: tag, ts: new Date(yr, M[mon], +day).getTime() });
    }
  }
  events.sort((a, b) => a.ts - b.ts);
  const coaches = {
    'Boys Varsity': [['Mickey Moran', 'Head Coach'], ["Ronnie D'Amico", 'Assistant'], ['Mike Yiuska', 'Assistant']],
    'Girls Varsity': [["Drew D'Agostino", 'Head Coach'], ["AJ D'Agostino", 'Assistant'], ['Brandon Lehmeier', 'Assistant'], ['Heather Verbanic', 'Assistant']],
    'Junior High': [['Adam Santoro', 'Head Coach'], ['Clint Waronsky', 'Assistant'], ['Ryan Aleski', 'Assistant'], ['Ken Wise', 'Assistant']]
  };
  return { events, coaches, teams: Object.keys(raw) };
})();
