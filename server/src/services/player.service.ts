import { Player } from 'models/player.model';

export class PlayerService {

  static get playerAttributes() {
    return ['id', 'uuid', 'nickname'];
  }

  public getAll() {
    return Player.all();
  }

  public getUserById(id: number) {
    return Player.findById(id, {
      attributes: PlayerService.playerAttributes
    });
  }
}
