import {  OnDestroy, OnInit, Component } from '@angular/core';
import { Subscription } from 'rxjs/src/internal/Subscription';
import { Paciente } from '../../model/paciente';
import { Route } from '@angular/router';
import { PacienteService } from '../../service/paciente.service';


@Component({
//@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})

export class ListarComponent implements OnInit, OnDestroy {

  public pacientes: Paciente[];
  colunas: string[] = ['nome', 'telefone', 'cpf', 'cep', 'email', 'logradouro', 'complemento', 'uf', 'acoes'];

  constructor(private pacienteService: PacienteService,
    //  private router: Route) { }
    private router: Route) { }
  ngOnInit() {
       this.atualizar();
  }

  ngOnDestroy(): void {
  }

  atualizar(): void {
    this.pacienteService.listar()
      .subscribe(pacientes => {
        this.pacientes = pacientes;
    });
  }

  //editar({ id }: Paciente): void {
    // this.router.navigate(['editar', id]);
    //this.router.navigate('editar', id)
  //}

remover({ id }: Paciente): void {
    this.pacienteService.remover(id)
      .subscribe(() => this.atualizar());
  }

}
