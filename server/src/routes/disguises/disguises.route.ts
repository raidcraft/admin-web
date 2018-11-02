import { DisguisesService, logger } from '@/services';
import { NextFunction, Request, Response } from 'express';
import * as jwtAuthz from 'express-jwt-authz';
import { BaseRoute } from '../route';

export class DisguisesApiRoute extends BaseRoute {
  public static path = '/disguises';
  private static instance: DisguisesApiRoute;

  private disguisesService = new DisguisesService();

  /**
   * @class PlayerRoute
   * @constructor
   */
  private constructor() {
    super();
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.init();
  }

  static get router() {
    if (!DisguisesApiRoute.instance) {
      DisguisesApiRoute.instance = new DisguisesApiRoute();
    }
    return DisguisesApiRoute.instance.router;
  }

  private init() {
    // log
    logger.info('[DisguisesRoute] Creating /disguises route.');

    this.router.get('/', jwtAuthz(['read:disguises']), this.get);
    this.router.post('/', jwtAuthz(['write:disguises']), this.post);
    this.router.post('/:id', jwtAuthz(['write:disguises']), this.update);
    this.router.delete('/:id', jwtAuthz(['write:disguises']), this.delete);
  }

  private async get(req: Request, res: Response, next: NextFunction) {
    res.json(await this.disguisesService.getAll());
    next();
  }

  private async post(req: Request, res: Response, next: NextFunction) {
    res.json(await this.disguisesService.create(req.body));
    next();
  }

  private async update(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id;
    res.json(await this.disguisesService.update(id, req.body));
    next();
  }

  private async delete(req: Request, res: Response, next: NextFunction) {
    const id = +req.params.id;
    res.json(await this.disguisesService.delete(id));
    next();
  }
}
