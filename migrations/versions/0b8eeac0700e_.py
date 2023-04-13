"""empty message

Revision ID: 0b8eeac0700e
Revises: a42f990d22f9
Create Date: 2023-04-13 09:32:52.836678

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0b8eeac0700e'
down_revision = 'a42f990d22f9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('race',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    with op.batch_alter_table('races', schema=None) as batch_op:
        batch_op.add_column(sa.Column('race_id', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('pet_id', sa.Integer(), nullable=False))
        batch_op.drop_constraint('races_name_key', type_='unique')
        batch_op.create_foreign_key(None, 'pet', ['pet_id'], ['id'])
        batch_op.create_foreign_key(None, 'race', ['race_id'], ['id'])
        batch_op.drop_column('name')
        batch_op.drop_column('id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('races', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False))
        batch_op.add_column(sa.Column('name', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_unique_constraint('races_name_key', ['name'])
        batch_op.drop_column('pet_id')
        batch_op.drop_column('race_id')

    op.drop_table('race')
    # ### end Alembic commands ###
