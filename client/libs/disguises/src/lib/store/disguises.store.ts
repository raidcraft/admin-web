import { Disguise } from "../models";
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from "@angular/core";

export interface DisguisesState extends EntityState<Disguise> { }

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: "disguises" })
export class DisguisesStore extends EntityStore<DisguisesState, Disguise> {

  constructor() {
    super();
    this.add(new Disguise({
      id: 1,
      alias: 'Test',
      description: 'My Test Disguise',
      skin_texture: 'eyJ0aW1lc3RhbXAiOjE1NDEwODQ5MTU5MTUsInByb2ZpbGVJZCI6ImU4MWY3OTI4YmZjMTQ0YmZiNTdiMThhYjdhNjM2MWU5IiwicHJvZmlsZU5hbWUiOiJTaWx0aHVzIiwic2lnbmF0dXJlUmVxdWlyZWQiOnRydWUsInRleHR1cmVzIjp7IlNLSU4iOnsidXJsIjoiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS9jOTQ1YmFmNDU2MDAwNjgxZjQ1ZTI0ODZjMWE2NjU0MjkyMDQzNzc5NjlhYTllN2RhZWFlNWZlYzk5Y2M4MzRlIiwibWV0YWRhdGEiOnsibW9kZWwiOiJzbGltIn19fX0',
      skin_signature: 'GCOPS9E3SSQIkpKtl+1l/Nn2chPb8bTF5Vnu6m3XZDGBbZZc0P8Gxsme8o8W7Uh4HdSVaFXvLtyPpoSc45iI3/x7dTEB2H4kCfSJ05/cc1REY9URuaw6hMHjVhA4J0ib7+fxwbHQQnncXsozwm6l2sGo4yjlv4Ttho4Q4uNfQQzFqHf66dMQ5QiUl9RLeGNbhyrMeHYgLLYwgA6yoxelsLs/oStwKu8+2nQInaMcY5GJ1qjH8Whzo9FARW58KBInEXtHT/cFmpPxGHf7kLyE/DtaCJ26yo19rvKGOTMzwM69GU+P5d0PGv3ELD0PfyzKqlvwLAatR881MYPAdqXPf+le/gFCAyQPlfJodpQIfdXpzbAjPkTtDLOZ7ql4O32ekhcGi447+3IZbfLA1WSQ/hhua5srfnYiOKb7mc66xxXWbTx5mzfbE+bES5dQQLOhR1AYL9wL/KjV79dug+9CnZyPvXI2DIAlomfcg5C0dbSJCLcQLjVxeIm8B9zkuYb6IiCGYRp0crGJIX8mVpWkPuMBvxTgwnhjHM6DtKzBJCrSOFXgi/KcYfSx2DxzLb44QuXpXw6vhF9KXk930+lrB4KHIVTmxGi79ize7Eu7JnHBKQ77VBhca4J8o+Qc8JUg2utyod4w4LcnVuPG2M0e9uv+E/fWWSHA09PW6OqjF/w=',
      skin_url: 'http://textures.minecraft.net/texture/c945baf456000681f45e2486c1a665429204377969aa9e7daeae5fec99cc834e',
      mineskin_id: 401055,
      skin_owner: '1234',
      skin_owner_name: 'Silthus'
    }));
  }
}
