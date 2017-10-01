import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

export const loadsngResources = (ir: MdIconRegistry, ds: DomSanitizer) => {
  const imageUrl = 'assets/image';
  const dayUrl = `${imageUrl}/day/day`;
  const avatarUrl = `${imageUrl}/avatar`;
  ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarUrl}/avatars.svg`))
  ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/image/gifts.svg'));
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl('assets/image/day.svg'));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl('assets/image/month.svg'));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl('assets/image/week.svg'));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl('assets/image/project.svg'));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl('assets/image/projects.svg'));
  const dayArra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 2, 30, 31];
  for (let i = 1; i < dayArra.length; i++) {
    ir.addSvgIcon(`day${i}`, ds.bypassSecurityTrustResourceUrl(`${dayUrl}${i}.svg`));
  }
}
