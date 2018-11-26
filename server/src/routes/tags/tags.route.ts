import { TagsService, logger } from '@/services';
import { NextFunction, Request, Response } from 'express';
import * as jwtAuthz from 'express-jwt-authz';
import { BaseRoute } from '../route';

export class TagsApiRoute extends BaseRoute {
  public static path = '/tags';
  private static instance: TagsApiRoute;

  private tagsService = new TagsService();

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
    if (!TagsApiRoute.instance) {
      TagsApiRoute.instance = new TagsApiRoute();
    }
    return TagsApiRoute.instance.router;
  }

  private init() {
    // log
    logger.info('[DisguisesRoute] Creating /tags route.');

    this.router.get('/', jwtAuthz(['read:tags']), this.get);
    this.router.post('/', jwtAuthz(['write:tags']), this.post);
    this.router.post('/:id', jwtAuthz(['write:tags']), this.update);
    this.router.delete('/:id', jwtAuthz(['write:tags']), this.delete);
  }

  private async get(req: Request, res: Response, next: NextFunction) {
    res.json(await this.tagsService.getAll());
    next();
  }

  private async post(req: Request, res: Response, next: NextFunction) {
    res.json(await this.tagsService.create(req.body));
    next();
  }

  private async update(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    res.json(await this.tagsService.update(id, req.body));
    next();
  }

  private async delete(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    res.json(await this.tagsService.delete(id));
    next();
  }
}
