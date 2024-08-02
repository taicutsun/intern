function myAuntSally(s) {
	return s.split(' ').filter(a=>a.match(/([a-z])\1*/g).some(x=>x.length==2)).join(' ');
}
//console.log('skiing'.match(/([a-z])\1*/g).some(x=>x.length==2));