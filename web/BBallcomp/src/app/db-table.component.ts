import { Component, OnInit } from '@angular/core';
import { DatabaseService} from './db.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {
  players: any[] = [];
  displayedColumns: string[] = ['name', 'team', 'position', 'points']; // Adjust based on your data

  constructor(private basketballService: DatabaseService) { }

  ngOnInit() {
    this.basketballService.getPlayers().subscribe(
      data => this.players = data,
      error => console.error('Error fetching players:', error)
    );
  }
}